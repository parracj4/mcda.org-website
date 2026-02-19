import ScrollZoomMap from "@/components/ScrollZoomMap";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      {/* Scroll-zoom hero section */}
      <ScrollZoomMap />

      {/* Content below the fold */}
      <section id="content" className="relative z-10 bg-navy">
        {/* Key stats */}
        <div className="bg-slate py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-serif text-gold mb-2">
                  $6B+
                </div>
                <div className="text-cream/80 font-sans">Active Investment</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-serif text-gold mb-2">
                  5,000+
                </div>
                <div className="text-cream/80 font-sans">Jobs Being Created</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-serif text-gold mb-2">
                  8 GW
                </div>
                <div className="text-cream/80 font-sans">Power Capacity Planned</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-serif text-gold mb-2">
                  50%
                </div>
                <div className="text-cream/80 font-sans">
                  of U.S. Within a Day&apos;s Drive
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Major investments */}
        <div className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-cream text-center mb-4">
              Headline Investments
            </h2>
            <p className="text-center text-cream/70 font-sans mb-12 max-w-2xl mx-auto">
              The biggest names in industry keep choosing Mason County. Here&apos;s why.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Nucor */}
              <div className="bg-slate/50 rounded-xl p-8 border border-gold/20 hover:border-gold/40 transition-colors">
                <div className="text-gold font-serif text-3xl mb-2">$2.7B</div>
                <div className="text-gold-light font-sans text-sm mb-4">800+ jobs</div>
                <h3 className="text-cream font-serif text-2xl mb-3">Nucor Steel</h3>
                <p className="text-cream/70 font-sans text-sm mb-4">
                  The largest private investment in West Virginia history. A
                  state-of-the-art sheet mill with capacity for 3 million tons per year.
                </p>
                <Link
                  href="/business/investments"
                  className="text-gold hover:text-gold-light font-sans text-sm transition-colors"
                >
                  Learn more →
                </Link>
              </div>

              {/* AIP Corp */}
              <div className="bg-slate/50 rounded-xl p-8 border border-gold/20 hover:border-gold/40 transition-colors">
                <div className="text-gold font-serif text-3xl mb-2">$3.5B+</div>
                <div className="text-gold-light font-sans text-sm mb-4">4,000+ jobs</div>
                <h3 className="text-cream font-serif text-2xl mb-3">AIP Corp</h3>
                <p className="text-cream/70 font-sans text-sm mb-4">
                  The Monarch Compute Campus: 8 gigawatts of dedicated power for
                  hyperscale AI infrastructure. Behind-the-meter generation.
                </p>
                <Link
                  href="/business/investments"
                  className="text-gold hover:text-gold-light font-sans text-sm transition-colors"
                >
                  Learn more →
                </Link>
              </div>

              {/* Frontieras */}
              <div className="bg-slate/50 rounded-xl p-8 border border-gold/20 hover:border-gold/40 transition-colors">
                <div className="text-gold font-serif text-3xl mb-2">$850M</div>
                <div className="text-gold-light font-sans text-sm mb-4">500+ jobs</div>
                <h3 className="text-cream font-serif text-2xl mb-3">Frontieras</h3>
                <p className="text-cream/70 font-sans text-sm mb-4">
                  First commercial-scale FASForm facility. Converting coal into
                  fuels, fertilizers, and carbon products with zero emissions.
                </p>
                <Link
                  href="/business/investments"
                  className="text-gold hover:text-gold-light font-sans text-sm transition-colors"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Why Mason County */}
        <div className="bg-blue py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-cream text-center mb-12">
              Why They Keep Choosing Us
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-navy/50 rounded-lg p-6">
                <h3 className="text-gold font-serif text-xl mb-3">
                  Strategic Location
                </h3>
                <p className="text-cream/70 font-sans text-sm">
                  Half the U.S. population within a day&apos;s drive. Highway, Ohio
                  River barge, and CSX Class I rail all in one place.
                </p>
              </div>

              <div className="bg-navy/50 rounded-lg p-6">
                <h3 className="text-gold font-serif text-xl mb-3">
                  Abundant Power
                </h3>
                <p className="text-cream/70 font-sans text-sm">
                  West Virginia ranks 5th nationally in energy production.
                  Substations from 138 to 765 kV. 8 GW of new dedicated power planned.
                </p>
              </div>

              <div className="bg-navy/50 rounded-lg p-6">
                <h3 className="text-gold font-serif text-xl mb-3">
                  Low Cost Environment
                </h3>
                <p className="text-cream/70 font-sans text-sm">
                  Cost of living 16-22% below national average. Among the lowest
                  workers&apos; comp rates in the nation.
                </p>
              </div>

              <div className="bg-navy/50 rounded-lg p-6">
                <h3 className="text-gold font-serif text-xl mb-3">
                  Ready Workforce
                </h3>
                <p className="text-cream/70 font-sans text-sm">
                  200,000+ workers within 60 miles. Mason County Career
                  Center&apos;s Simulated Workplace program produces job-ready graduates.
                </p>
              </div>

              <div className="bg-navy/50 rounded-lg p-6">
                <h3 className="text-gold font-serif text-xl mb-3">
                  Chemical &amp; Polymer Hub
                </h3>
                <p className="text-cream/70 font-sans text-sm">
                  70%+ of America&apos;s polyethylene demand within a day&apos;s drive.
                  Member of Chemical and Polymer Alliance Zones.
                </p>
              </div>

              <div className="bg-navy/50 rounded-lg p-6">
                <h3 className="text-gold font-serif text-xl mb-3">
                  Shovel-Ready Sites
                </h3>
                <p className="text-cream/70 font-sans text-sm">
                  Multiple industrial sites from 7 to 1,000+ acres with full
                  utility infrastructure and Ohio River frontage.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/why-mason-county"
                className="inline-block px-8 py-4 bg-gold text-navy font-sans font-semibold rounded-lg hover:bg-gold-light transition-colors"
              >
                Explore All Advantages →
              </Link>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="py-20 px-4 text-center">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif text-cream mb-6">
              Let&apos;s Talk
            </h2>
            <p className="text-cream/70 font-sans mb-8">
              Contact us to discuss available sites, incentives, and what Mason
              County can do for your project.
            </p>
            <Link
              href="/about/contact"
              className="inline-block px-8 py-4 bg-gold text-navy font-sans font-semibold rounded-lg hover:bg-gold-light transition-colors"
            >
              Start a Conversation →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
