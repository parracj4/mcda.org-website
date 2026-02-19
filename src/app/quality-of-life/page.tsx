export const metadata = {
  title: "Quality of Life | Mason County Development Authority",
  description:
    "Affordable living, natural beauty, and a strong sense of community make Mason County a great place to live and work.",
};

const costOfLiving = [
  { category: "Overall", savings: "16-22% below national average" },
  { category: "Housing", value: "$127,400 median home value" },
  { category: "Property Tax", value: "$487/year median" },
  { category: "Homeownership", value: "82.1% rate" },
];

const education = [
  { label: "Public Schools", value: "12" },
  { label: "Total Students", value: "3,788" },
  { label: "Graduation Rate", value: "91-94%" },
  { label: "High School or Higher", value: "87.2%" },
];

const highlights = [
  {
    title: "Affordable Living",
    description:
      "Cost of living is 16-22% below the national average. Median home prices are under $130,000, and property taxes average just $487 per year.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Natural Beauty",
    description:
      "At the confluence of the Ohio and Kanawha Rivers, Mason County offers scenic riverfront views, rolling hills, and abundant outdoor recreation opportunities.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Strong Community",
    description:
      "With a population of about 25,000, Mason County offers the tight-knit community feel of small-town America while being within easy reach of larger cities.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Quality Education",
    description:
      "Mason County schools boast a 91-94% graduation rate. Marshall University maintains a campus right in Point Pleasant, and several other colleges are within an hour's drive.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ),
  },
  {
    title: "Healthcare Access",
    description:
      "Rivers Health provides local healthcare services, with additional medical facilities in Charleston and Huntington within an hour's drive.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Rich History",
    description:
      "Point Pleasant is home to Tu-Endie-Wei State Park, marking the site of the first battle of the American Revolution. The area is also famous for Mothman folklore.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
  },
];

const nearbyDistances = [
  { city: "Charleston, WV", distance: "60 miles", description: "State capital with shopping, dining, and entertainment" },
  { city: "Huntington, WV", distance: "40 miles", description: "Marshall University, hospitals, and regional amenities" },
  { city: "Columbus, OH", distance: "170 miles", description: "Major metropolitan area" },
  { city: "Pittsburgh, PA", distance: "260 miles", description: "Major metropolitan area" },
];

export default function QualityOfLife() {
  return (
    <main className="bg-navy">
      {/* Hero */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream mb-6">
              Quality of Life
            </h1>
            <p className="text-xl text-gold-light">
              Affordable living, natural beauty, and a strong sense of community make
              Mason County a great place to call home.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="bg-slate/50 border border-gold/20 rounded-lg p-6"
              >
                <div className="text-gold mb-4">{item.icon}</div>
                <h2 className="font-serif text-xl text-cream mb-3">{item.title}</h2>
                <p className="text-cream/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost of Living */}
      <section className="py-20 bg-slate">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-serif text-3xl text-cream text-center mb-12">
            Cost of Living Advantage
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {costOfLiving.map((item) => (
              <div
                key={item.category}
                className="bg-navy/50 border border-gold/20 rounded-lg p-6 text-center"
              >
                <div className="text-cream/60 text-sm mb-2">{item.category}</div>
                <div className="font-serif text-xl text-gold">
                  {item.value || item.savings}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-serif text-3xl text-cream text-center mb-12">
            Education
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {education.map((item) => (
              <div
                key={item.label}
                className="bg-slate/50 border border-gold/20 rounded-lg p-6 text-center"
              >
                <div className="font-serif text-3xl text-gold mb-1">{item.value}</div>
                <div className="text-cream/70 text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Cities */}
      <section className="py-20 bg-slate">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-serif text-3xl text-cream text-center mb-12">
            Nearby Cities
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {nearbyDistances.map((item) => (
              <div
                key={item.city}
                className="bg-navy/50 border border-gold/20 rounded-lg p-6"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-xl text-cream">{item.city}</h3>
                  <span className="bg-gold/20 px-3 py-1 rounded text-gold text-sm">
                    {item.distance}
                  </span>
                </div>
                <p className="text-cream/60 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-cream mb-6">
            Come See for Yourself
          </h2>
          <p className="text-cream/80 mb-8 max-w-2xl mx-auto">
            Contact us to schedule a visit and experience what Mason County has to offer.
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
