export const metadata = {
  title: "Community Data | Mason County Development Authority",
  description:
    "Demographics, workforce, economy, and infrastructure data for Mason County, West Virginia.",
};

const demographics = [
  { label: "Population", value: "25,214", source: "ACS 2023" },
  { label: "Median Age", value: "44.2", source: "ACS 2023" },
  { label: "Median Household Income", value: "$53,454", source: "ACS 2023" },
  { label: "Per Capita Income", value: "$31,615", source: "ACS 2023" },
  { label: "Poverty Rate", value: "17.9%", source: "ACS 2023" },
  { label: "Homeownership Rate", value: "82.1%", source: "ACS 2023" },
  { label: "Total Housing Units", value: "12,056", source: "Census 2020" },
  { label: "County Area", value: "445 sq mi", source: "Census" },
  { label: "Land Area", value: "431 sq mi", source: "Census" },
];

const racialBreakdown = [
  { group: "White (Non-Hispanic)", percentage: "95.7%" },
  { group: "Two or More Races", percentage: "1.9%" },
  { group: "Black or African American", percentage: "0.9%" },
  { group: "Hispanic/Latino", percentage: "0.6%" },
  { group: "Asian", percentage: "0.5%" },
];

const economy = [
  {
    label: "GDP",
    value: "$1.09B",
    note: "2023",
    sourceLabel: "BEA",
    sourceUrl: "https://fred.stlouisfed.org/series/GDPALL54053",
  },
  {
    label: "Cost of Living Index",
    value: "77.9-84.2",
    note: "National = 100",
    sourceLabel: "BestPlaces",
    sourceUrl: "https://www.bestplaces.net/cost_of_living/county/west_virginia/mason",
  },
  {
    label: "Cost of Living Savings",
    value: "16-22%",
    note: "below national average",
  },
];

const housing = [
  {
    label: "Median Home Value",
    value: "$127,400",
    source: "ACS 2023",
  },
  {
    label: "Property Tax Rate",
    value: "0.61-0.71%",
    source: "Tax-Rates.org",
  },
  {
    label: "Median Property Tax",
    value: "$487/year",
    source: "Tax-Rates.org",
  },
];

const rents = [
  { type: "Studio", rent: "$658" },
  { type: "1-Bedroom", rent: "$769" },
  { type: "2-Bedroom", rent: "$852" },
  { type: "3-Bedroom", rent: "$1,026" },
  { type: "4-Bedroom", rent: "$1,130" },
];

const infrastructure = [
  {
    category: "Rivers",
    source: "USGS",
    sourceUrl: "https://waterdata.usgs.gov/monitoring-location/03201500/",
    items: [
      "Ohio River: Forms the entire western boundary. Point Pleasant at mile marker 264.",
      "Kanawha River: 97-mile tributary joining the Ohio at Point Pleasant. Drainage area of 8,450 sq mi.",
    ],
  },
  {
    category: "Highways",
    source: "WV DOT",
    sourceUrl: "https://transportation.wv.gov/highways/Highways-Projects/US_35/Pages/default.aspx",
    items: [
      "US Route 35: 4-lane divided highway, 34-37 miles to I-64 at Scott Depot. Completed 2021.",
      "WV Route 2: North-south along Ohio River. Part of the National Highway System.",
      "WV Route 62: Connects Point Pleasant to I-77 in Ripley via Ohio River valley communities.",
    ],
  },
  {
    category: "Rail",
    source: "CSX",
    sourceUrl: "https://www.csx.com/index.cfm/library/files/about-us/state-information/west-virginia/",
    items: [
      "CSX Class I railroad: 1,113 route miles in West Virginia",
      "Rail service available at New Haven Industrial Park with existing siding",
      "Major yards in Charleston, Huntington, Logan, and Parkersburg",
    ],
  },
  {
    category: "River Port Facilities",
    source: "New Haven Industrial Park",
    sourceUrl: "https://newhavenindustrialpark.com/",
    items: [
      "New Haven Industrial Park: 280+ acres with multimodal access (road, rail, river)",
      "23 certified mooring cells on Ohio River with barge loading capability",
      "80,000 sq ft enclosed warehouse and office space",
    ],
  },
  {
    category: "Airports",
    source: "TravelMath",
    sourceUrl: "https://www.travelmath.com/nearest-airport/Point+Pleasant,+WV",
    items: [
      "Huntington Tri-State Airport (HTS): 40 miles (straight-line), commercial passenger service",
      "Yeager Airport, Charleston (CRW): 44 miles (straight-line), commercial passenger service",
    ],
  },
  {
    category: "Broadband",
    source: "WV Governor's Office",
    sourceUrl: "https://governor.wv.gov/article/governor-patrick-morrisey-awards-broadband-project-funding-10-counties",
    items: [
      "Fiber expansion: $7.74M awarded to Comcast for Mason, Jackson, and Putnam counties",
      "362 miles of new fiber infrastructure serving 2,897 locations",
    ],
  },
];

const dataSources = [
  {
    name: "U.S. Census Bureau QuickFacts",
    url: "https://www.census.gov/quickfacts/masoncountywestvirginia",
  },
  {
    name: "American Community Survey (ACS) 2019-2023 5-Year Estimates",
    url: "https://data.census.gov/profile/Mason_County,_West_Virginia?g=050XX00US54053",
  },
  {
    name: "Bureau of Economic Analysis (BEA) via FRED",
    url: "https://fred.stlouisfed.org/series/GDPALL54053",
  },
  {
    name: "HUD Fair Market Rents FY2025",
    url: "https://www.huduser.gov/portal/datasets/fmr.html",
  },
  {
    name: "WV Governor's Office Broadband Announcement",
    url: "https://governor.wv.gov/article/governor-patrick-morrisey-awards-broadband-project-funding-10-counties",
  },
];

export default function CommunityData() {
  return (
    <main className="bg-navy">
      {/* Hero */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream mb-6">
              Community Data
            </h1>
            <p className="text-xl text-gold-light">
              Comprehensive data on demographics, workforce, economy, and infrastructure
              for Mason County, West Virginia.
            </p>
          </div>
        </div>
      </section>

      {/* Demographics */}
      <section className="py-16 bg-slate">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-serif text-3xl text-cream mb-8">Demographics</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {demographics.map((item) => (
              <div
                key={item.label}
                className="bg-navy/50 border border-gold/20 rounded-lg p-4"
              >
                <div className="text-cream/60 text-sm">{item.label}</div>
                <div className="font-serif text-2xl text-gold">{item.value}</div>
                {item.source && (
                  <div className="text-cream/40 text-xs mt-1">{item.source}</div>
                )}
              </div>
            ))}
          </div>

          {/* Racial Breakdown */}
          <div className="mt-8">
            <h3 className="text-cream font-medium mb-4">
              Racial Breakdown{" "}
              <span className="text-cream/40 text-sm font-normal">(ACS 2023)</span>
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {racialBreakdown.map((item) => (
                <div
                  key={item.group}
                  className="bg-navy/50 border border-gold/20 rounded-lg p-4 text-center"
                >
                  <div className="font-serif text-xl text-gold">{item.percentage}</div>
                  <div className="text-cream/60 text-sm">{item.group}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Economy */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-serif text-3xl text-cream mb-8">Economy</h2>
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {economy.map((item) => (
              <div
                key={item.label}
                className="bg-slate/50 border border-gold/20 rounded-lg p-6 text-center"
              >
                <div className="text-cream/60 text-sm mb-1">{item.label}</div>
                <div className="font-serif text-3xl text-gold mb-1">{item.value}</div>
                {item.note && <div className="text-cream/40 text-sm">{item.note}</div>}
                {item.sourceLabel && (
                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream/30 text-xs hover:text-gold/60 transition-colors underline"
                  >
                    {item.sourceLabel}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Housing */}
          <h3 className="font-serif text-2xl text-cream mb-6">Housing</h3>
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {housing.map((item) => (
              <div
                key={item.label}
                className="bg-slate/50 border border-gold/20 rounded-lg p-4"
              >
                <div className="text-cream/60 text-sm">{item.label}</div>
                <div className="font-serif text-xl text-gold">{item.value}</div>
                {item.source && (
                  <div className="text-cream/40 text-xs mt-1">{item.source}</div>
                )}
              </div>
            ))}
          </div>

          {/* Fair Market Rents */}
          <h3 className="font-serif text-xl text-cream mb-4">
            Fair Market Rents{" "}
            <span className="text-cream/40 text-sm font-normal">(HUD FY2025)</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {rents.map((item) => (
              <div
                key={item.type}
                className="bg-slate/50 border border-gold/20 rounded-lg p-4 text-center"
              >
                <div className="text-cream/60 text-sm mb-1">{item.type}</div>
                <div className="font-serif text-lg text-gold">{item.rent}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-16 bg-slate">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-serif text-3xl text-cream mb-8">
            Infrastructure & Transportation
          </h2>
          <div className="space-y-8">
            {infrastructure.map((section) => (
              <div key={section.category}>
                <h3 className="font-serif text-xl text-gold mb-4">{section.category}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
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
            ))}
          </div>
        </div>
      </section>

      {/* Opportunity Zone */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-slate/50 border border-gold/30 rounded-xl p-8 max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl text-cream mb-6 text-center">
              Opportunity Zone
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <div className="text-cream/60 text-sm">Tract</div>
                <div className="text-cream">54053955102</div>
              </div>
              <div>
                <div className="text-cream/60 text-sm">Location</div>
                <div className="text-cream">Apple Grove area</div>
              </div>
              <div>
                <div className="text-cream/60 text-sm">Designation</div>
                <div className="text-cream">2018 (Opportunity Zone 1.0)</div>
              </div>
              <div>
                <div className="text-cream/60 text-sm">OZ 1.0 Expiration</div>
                <div className="text-cream">December 31, 2028</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Sources */}
      <section className="py-12 bg-slate">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h3 className="font-serif text-xl text-cream mb-6 text-center">Data Sources</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {dataSources.map((source) => (
              <a
                key={source.name}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/50 text-sm hover:text-gold transition-colors underline"
              >
                {source.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-cream mb-6">
            Need More Data?
          </h2>
          <p className="text-cream/80 mb-8 max-w-2xl mx-auto">
            Download our prospect packet for comprehensive data or contact us for
            custom research.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/prospect-packet"
              className="inline-block px-8 py-4 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-light transition-colors"
            >
              Download Prospect Packet
            </a>
            <a
              href="/about/contact"
              className="inline-block px-8 py-4 border-2 border-gold text-gold font-semibold rounded-lg hover:bg-gold/10 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
