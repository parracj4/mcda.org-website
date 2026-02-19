export const metadata = {
  title: "Top Employers | Mason County Development Authority",
  description:
    "From automotive manufacturing to specialty metals, Mason County has a diverse industrial base with top employers.",
};

const localEmployers = [
  { name: "Toyota Motors", industry: "Automotive Manufacturing" },
  { name: "Constellium", industry: "Aluminum Manufacturing" },
  { name: "Rivers Health", industry: "Healthcare" },
  { name: "Mason County Board of Education", industry: "Education" },
  { name: "NGK Spark Plug", industry: "Automotive Parts Manufacturing" },
  { name: "WV Steel", industry: "Steel Manufacturing" },
  { name: "Special Metals", industry: "Specialty Metals Manufacturing" },
  { name: "Rubberlite Inc.", industry: "Rubber & Polymer Manufacturing" },
  { name: "Bob's Market & Greenhouses", industry: "Agriculture & Retail" },
  { name: "Steel Specialties LLC", industry: "Steel Fabrication" },
];

const regionalEmployers = [
  { name: "AEP Power", industry: "Energy & Utilities" },
  { name: "John Amos Plant", industry: "Power Generation" },
  { name: "Gavin Plant", industry: "Power Generation" },
  { name: "Kyger Creek Plant", industry: "Power Generation" },
  { name: "Alcon Laboratories", industry: "Pharmaceuticals" },
  { name: "Dow Chemical Co.", industry: "Chemical Manufacturing" },
  { name: "Chemours Belle Plant", industry: "Chemical Manufacturing" },
  { name: "Mountaineer Plant", industry: "Power Generation" },
  { name: "ICL-IP America Inc.", industry: "Chemical Manufacturing" },
  { name: "APG Polytech", industry: "Polymer Manufacturing" },
  { name: "Felman Production", industry: "Metals & Alloys" },
  { name: "R&L National Service", industry: "Logistics & Transportation" },
  { name: "Appalachian RailCar", industry: "Rail Equipment" },
  { name: "Amherst Madison Inc.", industry: "Marine Transportation" },
];

const sectors = [
  {
    name: "Retail Trade",
    employed: "1,439",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    name: "Health Care & Social Assistance",
    employed: "1,427",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    name: "Manufacturing",
    employed: "1,311",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
];

const highestPaying = [
  { sector: "Information", avgWage: "$65,167" },
  { sector: "Utilities", avgWage: "$62,266" },
  { sector: "Manufacturing", avgWage: "$61,006" },
];

export default function Employers() {
  return (
    <main className="bg-navy">
      {/* Hero */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream mb-6">
              Top Employers
            </h1>
            <p className="text-xl text-gold-light">
              From automotive manufacturing to specialty metals, Mason County has a
              diverse industrial base that provides stable, well-paying jobs.
            </p>
          </div>
        </div>
      </section>

      {/* Employment Sectors */}
      <section className="py-16 bg-slate">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-serif text-2xl text-cream text-center mb-8">
            Top Employment Sectors
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {sectors.map((sector) => (
              <div
                key={sector.name}
                className="bg-navy/50 border border-gold/20 rounded-lg p-6 text-center"
              >
                <div className="text-gold mb-3 flex justify-center">{sector.icon}</div>
                <h3 className="font-serif text-lg text-cream mb-1">{sector.name}</h3>
                <p className="text-gold text-2xl font-serif">{sector.employed}</p>
                <p className="text-cream/60 text-sm">employed</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highest Paying */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-serif text-2xl text-cream text-center mb-8">
            Highest Paying Sectors
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {highestPaying.map((sector, index) => (
              <div
                key={sector.sector}
                className="bg-slate/50 border border-gold/20 rounded-lg p-6 text-center"
              >
                <div className="text-gold/60 text-sm mb-2">#{index + 1}</div>
                <h3 className="font-serif text-lg text-cream mb-2">{sector.sector}</h3>
                <p className="text-gold text-2xl font-serif">{sector.avgWage}</p>
                <p className="text-cream/60 text-sm">avg. annual wage</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Employers */}
      <section className="py-16 bg-slate">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-serif text-3xl text-cream text-center mb-4">
            Local Employers
          </h2>
          <p className="text-cream/70 text-center mb-12 max-w-2xl mx-auto">
            Companies headquartered in or with major facilities in Mason County.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {localEmployers.map((employer) => (
              <div
                key={employer.name}
                className="bg-navy/50 border border-gold/20 rounded-lg p-4"
              >
                <h3 className="font-serif text-lg text-cream mb-1">{employer.name}</h3>
                <p className="text-gold/80 text-sm">{employer.industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Employers */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-serif text-3xl text-cream text-center mb-4">
            Regional Employers
          </h2>
          <p className="text-cream/70 text-center mb-12 max-w-2xl mx-auto">
            Major employers within commuting distance of Mason County.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {regionalEmployers.map((employer) => (
              <div
                key={employer.name}
                className="bg-slate/50 border border-gold/20 rounded-lg p-4"
              >
                <h3 className="font-serif text-lg text-cream mb-1">{employer.name}</h3>
                <p className="text-gold/80 text-sm">{employer.industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-cream mb-6">
            Join Our Growing Business Community
          </h2>
          <p className="text-cream/80 mb-8 max-w-2xl mx-auto">
            Discover why companies across industries choose Mason County.
          </p>
          <a
            href="/about/contact"
            className="inline-block px-8 py-4 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-light transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
