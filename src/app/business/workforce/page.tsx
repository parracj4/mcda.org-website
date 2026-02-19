export const metadata = {
  title: "Workforce Development | Mason County Development Authority",
  description:
    "200,000+ workers within 60 miles and the 3rd lowest workers' compensation rates in the nation.",
};

const stats = [
  { value: "9,376", label: "Employed Population" },
  { value: "4.3%", label: "Unemployment Rate" },
  { value: "26.6 min", label: "Average Commute" },
  { value: "$0.54", label: "Workers' Comp Rate (per $100)" },
];

const laborForce = [
  { radius: "Mason County", workers: "15,000+" },
  { radius: "30-mile radius", workers: "75,000+" },
  { radius: "50-mile radius", workers: "150,000+" },
  { radius: "60-mile radius", workers: "200,000+" },
];

const institutions = [
  {
    name: "Marshall University - Mid-Ohio Valley Center",
    location: "Point Pleasant (in-county)",
    programs: "BSN Nursing, Social Work, Regents BA, MSN",
    distance: "In County",
  },
  {
    name: "Mountwest Community & Technical College",
    location: "Huntington",
    programs: "Associate degrees, certificates, workforce training",
    distance: "~40 mi",
  },
  {
    name: "BridgeValley Community & Technical College",
    location: "South Charleston",
    programs: "Associate degrees, technical programs",
    distance: "~50 mi",
  },
  {
    name: "Marshall University (main campus)",
    location: "Huntington",
    programs: "Full university programs",
    distance: "~40 mi",
  },
  {
    name: "WVU at Parkersburg",
    location: "Parkersburg",
    programs: "Associate and bachelor's degrees",
    distance: "~60 mi",
  },
];

const workersCompComparison = {
  masonCounty: "$0.54",
  nationalMedian: "$1.09",
  ranking: "3rd lowest in the nation",
  savings: "50% below national median",
  source: "Oregon Department of Consumer and Business Services, January 2024",
  sourceUrl: "https://www.claimsjournal.com/news/national/2025/06/23/331364.htm",
};

export default function Workforce() {
  return (
    <main className="bg-navy">
      {/* Hero */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream mb-6">
              Workforce Development
            </h1>
            <p className="text-xl text-gold-light">
              A workforce that shows up. 200,000+ workers within 60 miles and
              the 3rd lowest workers' compensation rates in the nation.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-slate">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-serif text-3xl sm:text-4xl text-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-cream/80 text-sm sm:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Labor Force by Radius */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-serif text-3xl text-cream text-center mb-12">
            Labor Force by Radius
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {laborForce.map((item) => (
              <div
                key={item.radius}
                className="bg-slate/50 border border-gold/20 rounded-lg p-6 text-center"
              >
                <div className="font-serif text-3xl text-gold mb-2">
                  {item.workers}
                </div>
                <div className="text-cream/80">{item.radius}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workers' Compensation */}
      <section className="py-20 bg-slate">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl text-cream mb-8">
              Workers&apos; Compensation Advantage
            </h2>
            <div className="bg-navy/50 border border-gold/30 rounded-xl p-8">
              <div className="grid sm:grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="text-cream/60 text-sm uppercase tracking-wide mb-2">
                    West Virginia Rate
                  </div>
                  <div className="font-serif text-4xl text-gold">
                    {workersCompComparison.masonCounty}
                  </div>
                  <div className="text-cream/60 text-sm">per $100 payroll</div>
                </div>
                <div>
                  <div className="text-cream/60 text-sm uppercase tracking-wide mb-2">
                    National Median
                  </div>
                  <div className="font-serif text-4xl text-cream/50">
                    {workersCompComparison.nationalMedian}
                  </div>
                  <div className="text-cream/60 text-sm">per $100 payroll</div>
                </div>
              </div>
              <div className="border-t border-gold/20 pt-6">
                <div className="text-gold font-serif text-xl mb-2">
                  {workersCompComparison.ranking}
                </div>
                <div className="text-cream/80 mb-4">
                  {workersCompComparison.savings}
                </div>
                <div className="text-cream/40 text-xs">
                  Source:{" "}
                  <a
                    href={workersCompComparison.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-gold/60 transition-colors"
                  >
                    {workersCompComparison.source}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Highlights */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-serif text-3xl text-cream text-center mb-4">
            Education Pipeline
          </h2>
          <p className="text-cream/70 text-center mb-12 max-w-2xl mx-auto">
            Mason County schools have a 91-94% graduation rate. Multiple colleges and
            universities are within an hour's drive.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate/50 border border-gold/20 rounded-lg p-6">
              <h3 className="font-serif text-xl text-gold mb-4">K-12 Education</h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-cream/80">Public Schools</span>
                  <span className="text-cream">12</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-cream/80">Total Students</span>
                  <span className="text-cream">3,788</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-cream/80">Graduation Rate</span>
                  <span className="text-cream">91-94%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-cream/80">High School or Higher</span>
                  <span className="text-cream">87.2%</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate/50 border border-gold/20 rounded-lg p-6">
              <h3 className="font-serif text-xl text-gold mb-4">Career Training</h3>
              <p className="text-cream/80 mb-4">
                Mason County Career Center uses the nationally recognized Simulated
                Workplace model, preparing students for careers in manufacturing,
                healthcare, and skilled trades.
              </p>
              <p className="text-cream/80">
                Supported by WorkForce West Virginia and Workforce Development Region 4.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Institutions */}
      <section className="py-20 bg-slate">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-serif text-3xl text-cream text-center mb-12">
            Nearby Colleges & Universities
          </h2>
          <div className="space-y-4">
            {institutions.map((inst) => (
              <div
                key={inst.name}
                className="bg-navy/50 border border-gold/20 rounded-lg p-6 flex flex-col md:flex-row md:items-center gap-4"
              >
                <div className="flex-1">
                  <h3 className="font-serif text-lg text-cream mb-1">{inst.name}</h3>
                  <p className="text-gold/80 text-sm">{inst.programs}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-cream/60 text-sm">{inst.location}</div>
                  <div className="bg-gold/20 px-3 py-1 rounded text-gold text-sm">
                    {inst.distance}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-cream mb-6">
            Ready to Tap into Our Workforce?
          </h2>
          <p className="text-cream/80 mb-8 max-w-2xl mx-auto">
            Contact us to learn more about workforce development programs and hiring support.
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
