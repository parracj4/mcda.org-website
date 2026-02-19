import MasonCountyMap from "@/components/MasonCountyMap";
import Link from "next/link";

export const metadata = {
  title: "Mason County Map | Mason County Development Authority",
  description:
    "Interactive map of Mason County, WV showing highways, rail lines, rivers, towns, and key industrial sites.",
};

export default function MapPage() {
  return (
    <main className="bg-navy">
      {/* Hero */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream mb-6">
              Mason County Map
            </h1>
            <p className="text-xl text-gold-light">
              Official WV DOT General Highway Map showing highways, rail lines,
              rivers, towns, and infrastructure. Zoom and pan to explore.
            </p>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-12 bg-slate">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <MasonCountyMap
            sheets={[
              { src: "/mason-county-map-sheet1.pdf", label: "Sheet 1 — North" },
              { src: "/mason-county-map-sheet2.pdf", label: "Sheet 2 — South" },
            ]}
          />
        </div>
      </section>

      {/* Transportation Highlights */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl text-cream text-center mb-12">
            Transportation &amp; Access
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate/50 rounded-xl p-6 border border-gold/20">
              <div className="text-3xl mb-3">🛣️</div>
              <h3 className="font-serif text-xl text-gold mb-2">Highway</h3>
              <p className="text-cream/70 text-sm">
                US Route 35 (4-lane divided) connects to I-64 and I-77.
                WV Routes 2, 62, and 33 provide local access.
              </p>
            </div>

            <div className="bg-slate/50 rounded-xl p-6 border border-gold/20">
              <div className="text-3xl mb-3">🚂</div>
              <h3 className="font-serif text-xl text-gold mb-2">Rail</h3>
              <p className="text-cream/70 text-sm">
                CSX Class I railroad (Ohio River Subdivision) and Kanawha River
                Railroad provide freight service with existing spurs and sidings.
              </p>
            </div>

            <div className="bg-slate/50 rounded-xl p-6 border border-gold/20">
              <div className="text-3xl mb-3">🚢</div>
              <h3 className="font-serif text-xl text-gold mb-2">River</h3>
              <p className="text-cream/70 text-sm">
                Ohio River frontage the entire length of the county. Kanawha
                River confluence at Point Pleasant. Barge access with mooring
                cells.
              </p>
            </div>

            <div className="bg-slate/50 rounded-xl p-6 border border-gold/20">
              <div className="text-3xl mb-3">✈️</div>
              <h3 className="font-serif text-xl text-gold mb-2">Air</h3>
              <p className="text-cream/70 text-sm">
                Mason County Airport (3I2) with a 4,000-ft runway. Yeager
                Airport (CRW) in Charleston is 90 minutes away.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key distances */}
      <section className="py-20 bg-blue">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl text-cream text-center mb-12">
            Distances from Point Pleasant
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { city: "Charleston, WV", distance: "60 mi", time: "~1 hr" },
              { city: "Columbus, OH", distance: "170 mi", time: "~2.5 hrs" },
              { city: "Pittsburgh, PA", distance: "230 mi", time: "~3.5 hrs" },
              { city: "Charlotte, NC", distance: "340 mi", time: "~5 hrs" },
              { city: "Cincinnati, OH", distance: "195 mi", time: "~3 hrs" },
              { city: "Lexington, KY", distance: "160 mi", time: "~2.5 hrs" },
              { city: "Washington, DC", distance: "350 mi", time: "~5.5 hrs" },
              { city: "Detroit, MI", distance: "320 mi", time: "~5 hrs" },
            ].map((d) => (
              <div key={d.city} className="bg-navy/50 rounded-lg p-4">
                <div className="font-serif text-2xl text-gold mb-1">
                  {d.distance}
                </div>
                <div className="text-cream/60 text-xs mb-1">{d.time}</div>
                <div className="text-cream text-sm">{d.city}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-cream mb-6">
            See It for Yourself
          </h2>
          <p className="text-cream/80 mb-8 max-w-2xl mx-auto">
            Contact us for detailed site maps, virtual tours, and to discuss
            how Mason County&apos;s infrastructure fits your project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/sites"
              className="inline-block px-8 py-4 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-light transition-colors"
            >
              View Available Sites
            </Link>
            <Link
              href="/about/contact"
              className="inline-block px-8 py-4 border border-gold text-gold font-semibold rounded-lg hover:bg-gold hover:text-navy transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
