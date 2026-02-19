import Link from "next/link";

export const metadata = {
  title: "Business & Industry | Mason County Development Authority",
  description:
    "Explore Mason County's thriving business environment with over $6 billion in active investment from Nucor, Frontieras, and the Monarch Compute Campus.",
};

const sections = [
  {
    title: "Major Investments",
    href: "/business/investments",
    description:
      "Over $6 billion in active investment from Nucor, Frontieras North America, and the Monarch Compute Campus.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Top Employers",
    href: "/business/employers",
    description:
      "From automotive manufacturing to specialty metals, Mason County has a diverse industrial base.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Workforce Development",
    href: "/business/workforce",
    description:
      "200,000+ workers within 60 miles and the 3rd lowest workers' compensation rates in the nation.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Tax Incentives",
    href: "/business/tax-incentives",
    description:
      "From property tax reductions to sales tax exemptions, West Virginia offers significant incentives.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z" />
      </svg>
    ),
  },
];

const highlights = [
  { value: "$2.7B", label: "Nucor Steel Mill" },
  { value: "$850M", label: "Frontieras FASForm" },
  { value: "8 GW", label: "Monarch Compute Campus" },
  { value: "5,000+", label: "Jobs Being Created" },
];

export default function Business() {
  return (
    <main className="bg-navy">
      {/* Hero */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream mb-6">
              Business & Industry
            </h1>
            <p className="text-xl text-gold-light">
              Mason County is experiencing unprecedented growth with over $6 billion in
              active investment across steel manufacturing, clean energy technology, and
              AI infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-slate">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((stat) => (
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

      {/* Sections */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section) => (
              <Link
                key={section.title}
                href={section.href}
                className="group bg-slate/50 border border-gold/20 rounded-lg p-8 hover:border-gold/50 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-gold">{section.icon}</div>
                  <h2 className="font-serif text-2xl text-cream group-hover:text-gold transition-colors">
                    {section.title}
                  </h2>
                </div>
                <p className="text-cream/70">{section.description}</p>
                <div className="mt-6 text-gold flex items-center gap-2">
                  Learn more
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-cream mb-6">
            Explore Available Sites
          </h2>
          <p className="text-cream/80 mb-8 max-w-2xl mx-auto">
            From brownfield redevelopment to greenfield opportunities, Mason County has
            the site for your project.
          </p>
          <a
            href="/sites"
            className="inline-block px-8 py-4 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-light transition-colors"
          >
            View Available Sites
          </a>
        </div>
      </section>
    </main>
  );
}
