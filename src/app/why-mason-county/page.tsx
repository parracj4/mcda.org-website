import Image from "next/image";

export const metadata = {
  title: "Why Mason County | Mason County Development Authority",
  description:
    "Strategic location, abundant power, skilled workforce, and business-friendly climate make Mason County the ideal location for your next project.",
};

const stats = [
  { value: "$6B+", label: "Active Investment" },
  { value: "5,000+", label: "Jobs Being Created" },
  { value: "8 GW", label: "Power Capacity Planned" },
  { value: "50%", label: "of U.S. Population Within a Day's Drive" },
];

const sellingPoints = [
  {
    title: "Strategic Location",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    points: [
      "Within a day's drive of 50% of the U.S. population",
      "Within a day's drive of approximately 40% of the aerospace industry market",
      "Three ways to move product: Highway (US 35 to I-64), Ohio River barge, and CSX Class I rail",
      "Point Pleasant sits midway between Pittsburgh and Cincinnati",
      "Part of the Advantage Valley nine-county economic corridor",
    ],
  },
  {
    title: "Energy & Power",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    points: [
      "West Virginia ranks 5th in the nation in total energy production",
      "Substations ranging from 138 to 765 kV - largest transmission capacity in the country",
      "8 gigawatts of new dedicated power generation planned (Monarch Compute Campus)",
      "HB 2014 (2025) created fast-track framework for data center microgrids",
      "Behind-the-meter power options - will NOT increase rates for existing customers",
    ],
  },
  {
    title: "Workforce",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    points: [
      "200,000+ workers within a 60-mile radius",
      "Mason County Career Center - nationally recognized Simulated Workplace model",
      "Supported by WorkForce West Virginia and Workforce Development Region 4",
      "3rd lowest workers' compensation rates in the nation ($0.54 per $100 payroll)",
      "Nucor, Frontieras, and AIP Corp all cited workforce as key factor",
    ],
  },
  {
    title: "Business Climate",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    points: [
      "Cost of living 16-22% below national average",
      "No franchise tax, no unitary combined reporting",
      "Corporate income tax at 6.5% (proposed cut to 3.25%)",
      "Frontieras chose Mason County over Texas and Wyoming",
      "Over $6 billion in active private investment",
    ],
  },
  {
    title: "Chemical & Polymer Hub",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    points: [
      "Within a day's drive of 70%+ of America's polyethylene demand",
      "77% of North American polypropylene demand within a day's drive",
      "Decades of chemical and polymer production experience",
      "Member of both Chemical Alliance Zone and Polymer Alliance Zone",
      "Existing base: Dow Chemical, Chemours, ICL-IP America",
    ],
  },
];

const distances = [
  { city: "Charleston, WV", miles: "60 miles north" },
  { city: "Columbus, OH", miles: "170 miles" },
  { city: "Pittsburgh, PA", miles: "260 miles" },
  { city: "Washington, D.C.", miles: "330 miles" },
];

export default function WhyMasonCounty() {
  return (
    <main className="bg-navy">
      {/* Hero */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream mb-6">
              Why Mason County
            </h1>
            <p className="text-xl text-gold-light">
              Strategic location, abundant power, skilled workforce, and a business-friendly climate.
              This is why over $6 billion in investment chose Mason County.
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
                <div className="font-serif text-4xl sm:text-5xl text-gold mb-2">
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

      {/* Selling Points */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-16">
            {sellingPoints.map((point, index) => (
              <div
                key={point.title}
                className={`flex flex-col lg:flex-row gap-8 lg:gap-16 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-gold">{point.icon}</div>
                    <h2 className="font-serif text-2xl sm:text-3xl text-cream">
                      {point.title}
                    </h2>
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <ul className="space-y-3">
                    {point.points.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-gold mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-cream/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Distances */}
      <section className="py-20 bg-slate">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl text-cream text-center mb-12">
            Distances from Mason County
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {distances.map((d) => (
              <div
                key={d.city}
                className="bg-navy/50 border border-gold/20 rounded-lg p-6 text-center"
              >
                <div className="font-serif text-xl text-gold mb-1">{d.city}</div>
                <div className="text-cream/70">{d.miles}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-cream/60 mt-8 max-w-3xl mx-auto">
            Served by U.S. Route 35, the Ohio River inland waterway system, and CSX Class I
            rail - connecting Mason County to the eastern seaboard, the Gulf Coast, and the
            industrial Midwest.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-cream mb-6">
            Ready to Learn More?
          </h2>
          <p className="text-cream/80 mb-8 max-w-2xl mx-auto">
            Contact us to discuss how Mason County can support your next project.
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
