import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Mason County Development Authority";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a1628",
          padding: "60px",
        }}
      >
        {/* Gold accent line at top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            backgroundColor: "#c8a44e",
          }}
        />

        {/* Logo mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "96px",
            height: "96px",
            backgroundColor: "#c8a44e",
            borderRadius: "20px",
            marginBottom: "40px",
          }}
        >
          <span
            style={{
              fontSize: "60px",
              fontWeight: 700,
              color: "#0a1628",
              fontFamily: "Georgia, serif",
            }}
          >
            M
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "52px",
            fontWeight: 700,
            color: "#f5f0e8",
            fontFamily: "Georgia, serif",
            textAlign: "center",
            lineHeight: 1.2,
            marginBottom: "16px",
          }}
        >
          Mason County Development Authority
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "24px",
            color: "#e8d5a0",
            textAlign: "center",
            lineHeight: 1.5,
            maxWidth: "900px",
          }}
        >
          The best place in America for advanced manufacturing and AI
          infrastructure
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            gap: "48px",
            marginTop: "48px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontSize: "36px",
                fontWeight: 700,
                color: "#c8a44e",
                fontFamily: "Georgia, serif",
              }}
            >
              $6B+
            </span>
            <span style={{ fontSize: "16px", color: "#f5f0e8", opacity: 0.7 }}>
              Active Investment
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontSize: "36px",
                fontWeight: 700,
                color: "#c8a44e",
                fontFamily: "Georgia, serif",
              }}
            >
              8 GW
            </span>
            <span style={{ fontSize: "16px", color: "#f5f0e8", opacity: 0.7 }}>
              New Dedicated Power
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontSize: "36px",
                fontWeight: 700,
                color: "#c8a44e",
                fontFamily: "Georgia, serif",
              }}
            >
              Multimodal
            </span>
            <span style={{ fontSize: "16px", color: "#f5f0e8", opacity: 0.7 }}>
              River, Rail &amp; Highway
            </span>
          </div>
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: "absolute",
            bottom: "24px",
            fontSize: "16px",
            color: "#c8a44e",
            opacity: 0.6,
          }}
        >
          mcwv.org
        </div>
      </div>
    ),
    { ...size }
  );
}
