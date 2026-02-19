"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface PDFMapViewerProps {
  sheets: { src: string; label: string }[];
}

export default function MasonCountyMap({ sheets }: PDFMapViewerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [activeSheet, setActiveSheet] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Transform state for CSS-based zoom/pan (no re-render needed)
  const [transform, setTransform] = useState({ x: 0, y: 0, scale: 1 });
  const isDraggingRef = useRef(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const transformRef = useRef({ x: 0, y: 0, scale: 1 });
  const lastPinchDistRef = useRef<number | null>(null);

  // Keep ref in sync with state
  useEffect(() => {
    transformRef.current = transform;
  }, [transform]);

  // Render PDF to canvas (once per sheet change)
  const renderSheet = useCallback(
    async (sheetIndex: number) => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container) return;

      setLoading(true);
      setError(null);
      setTransform({ x: 0, y: 0, scale: 1 });

      try {
        const pdfjsLib = await import("pdfjs-dist");
        pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

        const loadingTask = pdfjsLib.getDocument(sheets[sheetIndex].src);
        const pdf = await loadingTask.promise;
        const page = await pdf.getPage(1);

        // Render at 2x for crisp zoom
        const containerWidth = container.clientWidth;
        const viewport = page.getViewport({ scale: 1 });
        const renderScale = (containerWidth / viewport.width) * 2;
        const scaledViewport = page.getViewport({ scale: renderScale });

        canvas.width = scaledViewport.width;
        canvas.height = scaledViewport.height;
        canvas.style.width = `${scaledViewport.width / 2}px`;
        canvas.style.height = `${scaledViewport.height / 2}px`;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        await page.render({
          canvasContext: ctx,
          viewport: scaledViewport,
          canvas: canvas,
        }).promise;

        setLoading(false);
      } catch (err) {
        console.error("PDF render error:", err);
        setError("Failed to load map. Try refreshing the page.");
        setLoading(false);
      }
    },
    [sheets]
  );

  // Render on mount and sheet change
  useEffect(() => {
    renderSheet(activeSheet);
  }, [activeSheet, renderSheet]);

  // Re-render on resize
  useEffect(() => {
    const handleResize = () => renderSheet(activeSheet);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeSheet, renderSheet]);

  // Mouse wheel zoom
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaY > 0 ? 0.92 : 1.08;
      setTransform((prev) => ({
        ...prev,
        scale: Math.max(0.5, Math.min(10, prev.scale * delta)),
      }));
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  // Mouse drag handlers
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    isDraggingRef.current = true;
    dragStartRef.current = {
      x: e.clientX - transformRef.current.x,
      y: e.clientY - transformRef.current.y,
    };
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    setTransform((prev) => ({
      ...prev,
      x: e.clientX - dragStartRef.current.x,
      y: e.clientY - dragStartRef.current.y,
    }));
  }, []);

  const handleMouseUp = useCallback(() => {
    isDraggingRef.current = false;
  }, []);

  // Touch handlers
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      lastPinchDistRef.current = Math.sqrt(dx * dx + dy * dy);
    } else if (e.touches.length === 1) {
      isDraggingRef.current = true;
      dragStartRef.current = {
        x: e.touches[0].clientX - transformRef.current.x,
        y: e.touches[0].clientY - transformRef.current.y,
      };
    }
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    e.preventDefault();
    if (e.touches.length === 2 && lastPinchDistRef.current !== null) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const pinchDelta = dist / lastPinchDistRef.current;
      lastPinchDistRef.current = dist;
      setTransform((prev) => ({
        ...prev,
        scale: Math.max(0.5, Math.min(10, prev.scale * pinchDelta)),
      }));
    } else if (e.touches.length === 1 && isDraggingRef.current) {
      setTransform((prev) => ({
        ...prev,
        x: e.touches[0].clientX - dragStartRef.current.x,
        y: e.touches[0].clientY - dragStartRef.current.y,
      }));
    }
  }, []);

  const handleTouchEnd = useCallback(() => {
    isDraggingRef.current = false;
    lastPinchDistRef.current = null;
  }, []);

  // Zoom controls
  const zoomIn = () =>
    setTransform((prev) => ({ ...prev, scale: Math.min(10, prev.scale * 1.4) }));
  const zoomOut = () =>
    setTransform((prev) => ({ ...prev, scale: Math.max(0.5, prev.scale / 1.4) }));
  const resetView = () => setTransform({ x: 0, y: 0, scale: 1 });

  return (
    <div className="w-full">
      {/* Sheet tabs */}
      <div className="flex justify-center gap-3 mb-4">
        {sheets.map((sheet, i) => (
          <button
            key={sheet.src}
            onClick={() => setActiveSheet(i)}
            className={`px-5 py-2 rounded-lg text-sm font-sans transition-all ${
              activeSheet === i
                ? "bg-gold text-navy font-semibold"
                : "bg-slate/50 text-cream/70 border border-gold/20 hover:border-gold/40"
            }`}
          >
            {sheet.label}
          </button>
        ))}
      </div>

      {/* Map viewer */}
      <div
        ref={containerRef}
        className="relative w-full bg-navy rounded-xl border border-gold/20 overflow-hidden select-none"
        style={{
          height: "70vh",
          cursor: isDraggingRef.current ? "grabbing" : "grab",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Canvas with CSS transform for instant zoom/pan */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.scale})`,
            transformOrigin: "center center",
            willChange: "transform",
          }}
        >
          <canvas ref={canvasRef} />
        </div>

        {/* Loading overlay */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-navy/80 z-10">
            <div className="text-center">
              <div className="w-8 h-8 border-2 border-gold/30 border-t-gold rounded-full animate-spin mx-auto mb-3" />
              <p className="text-cream/60 text-sm font-sans">Loading map...</p>
            </div>
          </div>
        )}

        {/* Error overlay */}
        {error && (
          <div className="absolute inset-0 flex items-center justify-center bg-navy/80 z-10">
            <div className="text-center">
              <p className="text-red-400 text-sm font-sans mb-3">{error}</p>
              <button
                onClick={() => renderSheet(activeSheet)}
                className="px-4 py-2 bg-gold text-navy text-sm font-semibold rounded-lg"
              >
                Retry
              </button>
            </div>
          </div>
        )}

        {/* Zoom controls */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 z-20">
          <button
            onClick={zoomIn}
            className="w-10 h-10 bg-slate/80 backdrop-blur-sm border border-gold/20 rounded-lg text-gold text-xl font-bold hover:bg-slate transition-colors flex items-center justify-center"
            aria-label="Zoom in"
          >
            +
          </button>
          <button
            onClick={zoomOut}
            className="w-10 h-10 bg-slate/80 backdrop-blur-sm border border-gold/20 rounded-lg text-gold text-xl font-bold hover:bg-slate transition-colors flex items-center justify-center"
            aria-label="Zoom out"
          >
            −
          </button>
          <button
            onClick={resetView}
            className="w-10 h-10 bg-slate/80 backdrop-blur-sm border border-gold/20 rounded-lg text-gold text-xs font-sans hover:bg-slate transition-colors flex items-center justify-center"
            aria-label="Reset view"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
              />
            </svg>
          </button>
        </div>

        {/* Zoom level */}
        <div className="absolute bottom-4 left-4 z-20 px-3 py-1 bg-slate/80 backdrop-blur-sm border border-gold/20 rounded-lg">
          <span className="text-cream/60 text-xs font-sans">
            {Math.round(transform.scale * 100)}%
          </span>
        </div>

        {/* Instructions */}
        <div className="absolute bottom-4 right-4 z-20 px-3 py-1 bg-slate/80 backdrop-blur-sm border border-gold/20 rounded-lg">
          <span className="text-cream/40 text-xs font-sans hidden sm:inline">
            Scroll to zoom · Drag to pan
          </span>
          <span className="text-cream/40 text-xs font-sans sm:hidden">
            Pinch to zoom · Drag to pan
          </span>
        </div>
      </div>

      {/* Download links */}
      <div className="flex justify-center gap-4 mt-4">
        {sheets.map((sheet) => (
          <a
            key={sheet.src}
            href={sheet.src}
            download
            className="text-gold/60 text-sm font-sans hover:text-gold transition-colors"
          >
            Download {sheet.label} (PDF)
          </a>
        ))}
      </div>
    </div>
  );
}
