export const metadata = {
  title: "Tax Incentives | Mason County Development Authority",
  description:
    "From property tax reductions to sales tax exemptions, West Virginia offers significant incentives for businesses.",
};

const taxFacts = [
  { label: "Property Tax Rate", value: "~0.61-0.71%" },
  { label: "Median Property Tax", value: "$487/year" },
  { label: "Corporate Income Tax", value: "6.5%" },
  { label: "Sales Tax", value: "6% state + 1% municipal" },
];

const incentiveCategories = [
  {
    title: "Property Tax Incentives",
    incentives: [
      {
        name: "Freeport Exemption",
        benefit: "100% property tax exemption on goods in transit",
        summary:
          "Manufactured products and goods moving through West Virginia in interstate commerce are fully exempt from property tax. Critical for manufacturers, warehousing, and distribution.",
        code: "WV Code §11-5-13",
        codeUrl: "https://code.wvlegislature.gov/11-5/",
      },
      {
        name: "Five for Ten Program",
        benefit: "Property valued at 5% of cost for 10 years (95% reduction)",
        summary:
          "Large manufacturing facilities ($50M+ new investment to an existing base of $100M+, or $10M+ to a $20M+ base for natural gas extraction) get property assessed at just 5% of cost for a decade.",
        code: "WV Code §11-6F",
        codeUrl: "https://code.wvlegislature.gov/11-6F/",
      },
      {
        name: "Manufacturing Property Tax Adjustment Credit",
        benefit: "Dollar-for-dollar credit against income tax for property tax paid on inventory",
        summary:
          "Manufacturers claim a credit against corporate net income tax equal to property taxes paid on raw materials, goods in process, and finished goods inventory.",
        code: "WV Code §11-13Y",
        codeUrl: "https://code.wvlegislature.gov/11-13Y/",
      },
    ],
  },
  {
    title: "Corporate & Income Tax Credits",
    incentives: [
      {
        name: "Manufacturing Investment Tax Credit",
        benefit: "Up to 60% offset of corporate income tax for 10 years",
        summary:
          "A 5% credit on qualified investment, pro-rated over 10 years at 10% per year, that offsets up to 60% of corporate net income and severance tax. No job creation required - purely investment-based. Credit is transferable.",
        code: "WV Code §11-13S",
        codeUrl: "https://code.wvlegislature.gov/11-13S/",
      },
      {
        name: "Economic Opportunity Tax Credit",
        benefit: "Up to 80-100% offset of corporate income tax for 20 years",
        summary:
          "Job creation credit: Create 20+ new jobs to offset 80% of income tax. Pay above the statewide average non-farm wage and it jumps to 100%. Small business option: $3,000/job for 5 years (requires $35,700+ annual salary).",
        code: "WV Code §11-13Q",
        codeUrl: "https://code.wvlegislature.gov/11-13Q/",
      },
      {
        name: "Competitive Corporate Tax Rate",
        benefit: "6.5% rate (no franchise tax)",
        summary:
          "West Virginia's 6.5% corporate income tax is among the region's lowest. No franchise tax, no unitary combined reporting. The rate has been steadily reduced from 9.75% in 1987.",
        code: "WV Code §11-24-4",
        codeUrl: "https://code.wvlegislature.gov/11-24/",
      },
    ],
  },
  {
    title: "Sales Tax Exemptions",
    incentives: [
      {
        name: "Manufacturing Sales Tax Exemption",
        benefit: "0% sales tax on equipment and materials directly used in manufacturing",
        summary:
          "Services, machinery, supplies, and materials directly used or consumed in manufacturing activities are exempt from the 6% state and 1% municipal sales tax - including equipment that is an integral part of the manufacturing process.",
        code: "WV Code §11-15-9",
        codeUrl: "https://code.wvlegislature.gov/11-15-9/",
      },
      {
        name: "Warehouse & Distribution Exemption",
        benefit: "Full sales tax exemption for $50M+ distribution facilities",
        summary:
          "Warehouse and distribution operations with $50M+ investment and 300+ full-time West Virginia employees qualify for sales tax exemptions on computers, material handling equipment, racking systems, and building materials.",
        code: "WV Code §11-15-9n",
        codeUrl: "https://code.wvlegislature.gov/11-15-9N/",
      },
    ],
  },
  {
    title: "Data Center & Technology",
    incentives: [
      {
        name: "High-Technology Business Property Valuation Act",
        benefit: "Salvage value property tax assessment for servers and tech equipment",
        summary:
          "Servers and tangible personal property directly used in a high-technology business or Internet advertising business are assessed at salvage value for property tax purposes, rather than fair market value.",
        code: "WV Code §11-6J",
        codeUrl: "https://code.wvlegislature.gov/11-6J/",
      },
      {
        name: "High-Tech Sales Tax Exemption",
        benefit: "0% sales tax on computers, servers, software, and hardware",
        summary:
          "Purchases of computer hardware, software (including custom software), and licensing fees for high-technology businesses are exempt from sales tax to encourage tech companies to locate in West Virginia.",
        code: "WV Code §11-15-9h",
        codeUrl: "https://code.wvlegislature.gov/11-15-9h/",
      },
      {
        name: "High-Tech Manufacturing Credit",
        benefit: "100% tax offset for 20 years (transferable)",
        summary:
          "Manufacturers of computers, electronic components, or semiconductors that create 20+ jobs can offset 100% of B&O and corporate income tax for 20 consecutive years. The credit is transferable.",
        code: "WV Code §11-13Q-10A",
        codeUrl: "https://code.wvlegislature.gov/11-13Q-10A/",
      },
      {
        name: "Certified Microgrid & Data Center Program (HB 2014)",
        benefit: "PSC exemption for on-site power + streamlined siting",
        summary:
          "Signed into law April 30, 2025; effective July 11, 2025. Data centers can build dedicated on-site power generation without Public Service Commission jurisdiction over rates or certificates. This is the law that makes the Monarch Compute Campus possible.",
        code: "Power Generation and Consumption Act",
        codeUrl: "https://www.wvlegislature.gov/Bill_Text_HTML/2025_SESSIONS/RS/bills/hb2014%20sub1%20enr.pdf",
      },
      {
        name: "Coal-Powered Data Center Incentive (SB 623)",
        benefit: "Sales tax exemption + property tax at salvage value",
        summary:
          "PENDING LEGISLATION: Would provide tax incentives for data centers committing to 80%+ coal-generated electricity: sales tax exemption on equipment, property tax at salvage value, and B&O tax exemption. Requires $50M+ investment and 50+ jobs.",
        code: "SB 623 (2026 Session - Pending)",
        codeUrl: "https://www.wvlegislature.gov/Bill_Status/bills_text.cfm?billdoc=sb623+intr.htm&yr=2026&sesstype=RS&i=623",
        pending: true,
      },
    ],
  },
  {
    title: "Workforce & Job Creation",
    incentives: [
      {
        name: "High Wage Growth Tax Credit",
        benefit: "Up to 10% payroll credit for high-paying jobs, 5 years",
        summary:
          "Create 10+ jobs paying at least 2.25x the state median salary with health benefits (employer pays at least 50% of premiums). Credit up to 10% of payroll for 5 consecutive years.",
        code: "WV Code §11-13II",
        codeUrl: "https://code.wvlegislature.gov/11-13II/",
      },
      {
        name: "Return to West Virginia Tax Credit",
        benefit: "$25,000 personal income tax credit for returning residents",
        summary:
          "Former West Virginians who resided and worked in WV for 10+ years (or were born in WV) and have been away for 10+ consecutive years receive a $25,000 nonrefundable personal income tax credit. Expires December 31, 2030.",
        code: "WV Code §11-13NN",
        codeUrl: "https://www.wvlegislature.gov/bill_status/bills_text.cfm?billdoc=sb336+intr.htm&yr=2024&sesstype=RS&i=336",
      },
    ],
  },
  {
    title: "Federal Programs",
    incentives: [
      {
        name: "Federal Opportunity Zones",
        benefit: "Tax-free appreciation on 10+ year investments",
        summary:
          "Mason County's Apple Grove tract is a designated Opportunity Zone. Capital gains invested through Qualified Opportunity Funds receive tax deferral, and appreciation is tax-free after 10 years. OZ 1.0 tracts expire December 31, 2028; OZ 2.0 designations begin January 1, 2027.",
        code: "26 U.S.C. §1400Z",
        codeUrl: "https://opportunityzones.hud.gov/",
      },
      {
        name: "New Markets Tax Credits",
        benefit: "39% federal tax credit over 7 years (20-30% project cost reduction)",
        summary:
          "Equity investments through certified Community Development Entities in low-income communities earn a 39% federal tax credit over 7 years. Can reduce total project cost by 20-30%.",
        code: "26 U.S.C. §45D",
        codeUrl: "https://www.cdfifund.gov/programs-training/programs/new-markets-tax-credit",
      },
      {
        name: "Appalachian Regional Commission Grants",
        benefit: "Federal grants for infrastructure, site development, and workforce",
        summary:
          "All 55 WV counties qualify for ARC grants supporting water/wastewater, broadband, site development, and workforce training. Mason County has received prior ARC and EDA investment.",
        code: "40 U.S.C. §14101 et seq.",
        codeUrl: "https://www.arc.gov/",
      },
    ],
  },
];

export default function TaxIncentives() {
  return (
    <main className="bg-navy">
      {/* Hero */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream mb-6">
              Tax Incentives
            </h1>
            <p className="text-xl text-gold-light">
              West Virginia offers one of the most competitive business tax environments
              in the nation. Here&apos;s what&apos;s available to your project.
            </p>
          </div>
        </div>
      </section>

      {/* Tax Facts */}
      <section className="py-16 bg-slate">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-serif text-2xl text-cream text-center mb-8">
            Mason County Tax Facts
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {taxFacts.map((fact) => (
              <div
                key={fact.label}
                className="bg-navy/50 border border-gold/20 rounded-lg p-4 text-center"
              >
                <div className="text-cream/60 text-sm mb-1">{fact.label}</div>
                <div className="font-serif text-xl text-gold">{fact.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incentives by Category */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-16">
            {incentiveCategories.map((category) => (
              <div key={category.title}>
                <h2 className="font-serif text-2xl sm:text-3xl text-gold mb-8 pb-4 border-b border-gold/20">
                  {category.title}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {category.incentives.map((incentive) => (
                    <div
                      key={incentive.name}
                      className={`bg-slate/50 border rounded-lg p-6 ${
                        incentive.pending
                          ? "border-yellow-500/30"
                          : "border-gold/20"
                      }`}
                    >
                      {incentive.pending && (
                        <div className="inline-block px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded mb-3">
                          Pending Legislation
                        </div>
                      )}
                      <h3 className="font-serif text-xl text-cream mb-2">
                        {incentive.name}
                      </h3>
                      <div className="text-gold text-sm font-medium mb-3">
                        {incentive.benefit}
                      </div>
                      <p className="text-cream/70 text-sm mb-4">{incentive.summary}</p>
                      <div className="text-cream/40 text-xs">
                        <a
                          href={incentive.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-gold/60 transition-colors underline"
                        >
                          {incentive.code}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunity Zone Callout */}
      <section className="py-20 bg-slate">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-navy/50 border border-gold/30 rounded-xl p-8 lg:p-12 max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl text-cream mb-4 text-center">
              Opportunity Zone
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <div className="text-cream/60 text-sm mb-1">Tract</div>
                <div className="text-cream">54053955102</div>
              </div>
              <div>
                <div className="text-cream/60 text-sm mb-1">Location</div>
                <div className="text-cream">Apple Grove area</div>
              </div>
              <div>
                <div className="text-cream/60 text-sm mb-1">Designation</div>
                <div className="text-cream">2018 (Opportunity Zone 1.0)</div>
              </div>
              <div>
                <div className="text-cream/60 text-sm mb-1">OZ 1.0 Expiration</div>
                <div className="text-cream">December 31, 2028</div>
              </div>
            </div>
            <p className="text-cream/70 text-center text-sm">
              Investors can defer and potentially reduce capital gains taxes by investing
              in qualified projects within this zone. OZ 2.0 designations will take effect
              January 1, 2027, with a new nomination process.
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-cream/40 text-xs text-center max-w-3xl mx-auto">
            Tax incentive information is provided for general reference only. Eligibility requirements,
            credit amounts, and program availability are subject to change. Consult with qualified
            tax and legal professionals and contact the{" "}
            <a
              href="https://westvirginia.gov/wv-incentives/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gold/60 transition-colors"
            >
              West Virginia Development Office
            </a>{" "}
            for current program details and application requirements.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-cream mb-6">
            Let Us Help You Navigate Incentives
          </h2>
          <p className="text-cream/80 mb-8 max-w-2xl mx-auto">
            Our team can help identify which incentives apply to your project and connect
            you with the right state agencies.
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
