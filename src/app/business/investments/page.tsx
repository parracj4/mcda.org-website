export const metadata = {
  title: "Major Investments | Mason County Development Authority",
  description:
    "Over $6 billion in active investment from Nucor, Frontieras North America, and the Monarch Compute Campus.",
};

const investments = [
  {
    name: "Nucor Corporation",
    investment: "$2.7 Billion",
    jobs: "800 permanent + 1,000 construction",
    timeline: "Completion end of 2026",
    headline: "Largest Private Investment in West Virginia History",
    summary:
      "Nucor picked Mason County for the biggest investment their company has ever made. A $2.7 billion sheet steel mill on the Ohio River. It is also the largest private investment in the history of West Virginia.",
    details: [
      "Up to 3 million tons of sheet steel per year",
      "84-inch sheet products with a 76-inch tandem cold mill and two galvanizing lines",
      "Automotive galvanizing line with full inspection capabilities, plus a construction-grade line",
      "Serves automotive, appliance, HVAC, heavy equipment, agricultural, transportation, and construction customers",
      "Ohio River location gives barge access to the Midwest and Northeast, the two largest sheet-consuming regions in the country",
      "Lower carbon footprint than the regional competitors it will replace",
    ],
    impact:
      "When this mill is running at capacity, Mason County will be one of the most important steel production centers in North America.",
    website: "https://nucor.com/",
    color: "gold",
  },
  {
    name: "Frontieras North America",
    investment: "$850 Million",
    jobs: "2,000+ construction / 200+ permanent",
    timeline: "Construction 2026, operational mid-2028",
    headline: "First Commercial-Scale Coal Reformation Facility in the World",
    summary:
      "Frontieras looked at sites in Texas and Wyoming before choosing Mason County for their $850 million FASForm facility. It will be the first commercial-scale plant using their patented coal reformation technology.",
    details: [
      "Converts coal into fuels, fertilizers, and industrial carbon products with zero waste and no emissions",
      "183 acres of riverfront property with over a mile of Ohio River frontage for barge access",
      "Class I rail via CSX and direct proximity to Appalachian coal reserves",
      "Frontieras holds patents across five continents and nine countries, covering about 85% of global coal reserves",
      "The company cited West Virginia's infrastructure, logistics, and business-friendly policies as the deciding factors over Texas and Wyoming",
      "Processing capacity of 2.7 million tons of coal per year",
    ],
    impact:
      "This is an entirely new use for coal. Not power generation, not steelmaking. Fuels, fertilizers, and industrial carbon products from a single facility right here in Mason County.",
    website: "https://www.frontieras.com/",
    color: "blue",
  },
  {
    name: "Monarch Compute Campus",
    investment: "Multi-Billion Dollar",
    jobs: "Significant construction and permanent positions",
    timeline: "First power delivery September 2026",
    headline: "2 to 8 Gigawatt AI Data Center Power Campus",
    summary:
      "Fidelis New Energy and 8090 Industries created American Intelligence & Power Corporation (AIP) with backing from LuminArx Capital Management. They are building the Monarch Compute Campus north of Point Pleasant to deliver 2 to 8 gigawatts of dedicated power for AI data centers.",
    details: [
      "Partnership with Caterpillar and Boyd CAT to deploy 2 gigawatts of natural gas power generation in the first phase",
      "Full build-out targets 8 gigawatts using natural gas",
      "Located along WV Route 62, the Ohio River, and CSX railroad tracks north of Point Pleasant",
      "Fully self-supplied, behind-the-meter power. Will NOT increase rates for existing utility customers",
      "First power delivery scheduled September 2026 through August 2027",
      "Three years of development went into site selection and planning before this location was chosen",
    ],
    impact:
      "When fully built out, this will be one of the largest dedicated AI power campuses in the country, and it is being built in Mason County.",
    website: "https://fidelisinfra.com/",
    color: "cream",
  },
];

export default function Investments() {
  return (
    <main className="bg-navy">
      {/* Hero */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream mb-6">
              Major Investments
            </h1>
            <p className="text-xl text-gold-light">
              Over $6 billion in active investment is transforming Mason County into one
              of the most important industrial centers in the eastern United States.
            </p>
          </div>
        </div>
      </section>

      {/* Investments */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-20">
            {investments.map((inv) => (
              <div
                key={inv.name}
                className="bg-slate/50 border border-gold/20 rounded-xl overflow-hidden"
              >
                <div className="p-8 lg:p-12">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
                    <div>
                      <h2 className="font-serif text-3xl sm:text-4xl text-cream mb-2">
                        {inv.name}
                      </h2>
                      <p className="text-gold text-lg">{inv.headline}</p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <div className="bg-navy/50 px-4 py-2 rounded-lg">
                        <div className="text-xs text-cream/60 uppercase tracking-wide">
                          Investment
                        </div>
                        <div className="font-serif text-xl text-gold">
                          {inv.investment}
                        </div>
                      </div>
                      <div className="bg-navy/50 px-4 py-2 rounded-lg">
                        <div className="text-xs text-cream/60 uppercase tracking-wide">
                          Jobs
                        </div>
                        <div className="font-serif text-xl text-cream">
                          {inv.jobs}
                        </div>
                      </div>
                      <div className="bg-navy/50 px-4 py-2 rounded-lg">
                        <div className="text-xs text-cream/60 uppercase tracking-wide">
                          Timeline
                        </div>
                        <div className="font-serif text-xl text-cream">
                          {inv.timeline}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-cream/80 text-lg mb-8">{inv.summary}</p>

                  {/* Details */}
                  <div className="mb-8">
                    <h3 className="font-serif text-xl text-cream mb-4">
                      Project Details
                    </h3>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {inv.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-3">
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
                          <span className="text-cream/70">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact */}
                  <div className="bg-navy/50 border-l-4 border-gold p-6 rounded-r-lg mb-6">
                    <h3 className="font-serif text-lg text-gold mb-2">Impact</h3>
                    <p className="text-cream/80">{inv.impact}</p>
                  </div>

                  {/* Website Link */}
                  <a
                    href={inv.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
                  >
                    Visit Website
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
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
            Join the Growth
          </h2>
          <p className="text-cream/80 mb-8 max-w-2xl mx-auto">
            These companies chose Mason County. Find out how we can support your project.
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
