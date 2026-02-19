export const metadata = {
  title: "Board of Directors | Mason County Development Authority",
  description:
    "Meet the Board of Directors guiding economic development in Mason County, West Virginia.",
};

const officers = [
  {
    name: "Jim Rossi",
    title: "President",
    organization: "Accountant – Retired",
    term: "3 year",
  },
  {
    name: "Dennis Brumfield",
    title: "Vice President",
    organization: "CPA",
    term: "3 year",
  },
  {
    name: "Mark Groves",
    title: "Treasurer",
    organization: "Farmer's Bank",
    term: "3 year",
  },
  {
    name: "Missy Deem",
    title: "Secretary",
    organization: "ICL-IP",
    term: "1 year",
  },
];

const boardMembers = [
  {
    name: "Rick Handley",
    organization: "Mason County Commissioner",
    term: "1 year",
  },
  {
    name: "Leigh Ann Shepard",
    organization: "City National Bank",
    term: "2 years",
  },
  {
    name: "Bryan Stepp",
    organization: "OVB",
    term: "2 years",
  },
  {
    name: "Scott Brewer",
    organization: "Union Rep.",
    term: "2 years",
  },
  {
    name: "Jack Cullen",
    organization: "Citizen",
    term: "1 year",
  },
  {
    name: "Brian Sayre",
    organization: "Citizen",
    term: "3 years",
  },
  {
    name: "Jared Nutter",
    organization: "JM Industrial",
    term: "1 year",
  },
  {
    name: "Robert Brinker",
    organization: "Brinker Machine",
    term: "2 years",
  },
  {
    name: "Jay Parrack",
    organization: "Jon Parrack Insurance",
    term: "2 years",
  },
  {
    name: "Denny Bellamy",
    organization: "Mason County Tourism",
    term: "1 year",
  },
  {
    name: "Steve Richardson",
    organization: "Mason County Schools Career Technology Programs",
    term: "3 years",
  },
  {
    name: "Jeremy Bryant",
    organization: "Pt. Pleasant Fire Dep.",
    term: "1 year",
  },
  {
    name: "Scott Raynes",
    organization: "Marshall Health Network",
    term: "3 years",
  },
  {
    name: "Jordan Brandon",
    organization: "Nucor",
    term: "2 years",
  },
];

const staff = [
  {
    name: "Anna M. Rittenhouse",
    title: "Executive Director",
    email: "Anna.Rittenhouse@masoncounty.org",
  },
];

export default function Board() {
  return (
    <main className="bg-navy">
      {/* Hero */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream mb-6">
              Board of Directors
            </h1>
            <p className="text-xl text-gold-light">
              Our board provides strategic leadership and oversight for economic
              development initiatives in Mason County.
            </p>
          </div>
        </div>
      </section>

      {/* Staff */}
      <section className="py-16 bg-slate">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-serif text-2xl text-cream text-center mb-8">Staff</h2>
          <div className="max-w-md mx-auto">
            {staff.map((person) => (
              <div
                key={person.name}
                className="bg-navy/50 border border-gold/30 rounded-xl p-8 text-center"
              >
                <div className="w-24 h-24 bg-slate rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-gold/50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-cream mb-1">{person.name}</h3>
                <p className="text-gold mb-3">{person.title}</p>
                <a
                  href={`mailto:${person.email}`}
                  className="text-cream/70 hover:text-gold transition-colors"
                >
                  {person.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Officers */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-serif text-2xl text-cream text-center mb-12">
            2026 Officers
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {officers.map((officer) => (
              <div
                key={officer.name}
                className="bg-slate/50 border border-gold/30 rounded-lg p-6 text-center"
              >
                <div className="w-16 h-16 bg-navy rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-gold/50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-lg text-cream mb-1">{officer.name}</h3>
                <p className="text-gold text-sm font-medium mb-1">{officer.title}</p>
                <p className="text-cream/60 text-sm">{officer.organization}</p>
                <p className="text-cream/40 text-xs mt-2">{officer.term} term</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board Members */}
      <section className="py-20 bg-slate">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-serif text-2xl text-cream text-center mb-12">
            Board Members
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {boardMembers.map((member) => (
              <div
                key={member.name}
                className="bg-navy/50 border border-gold/20 rounded-lg p-5 text-center"
              >
                <div className="w-12 h-12 bg-slate rounded-full mx-auto mb-3 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-gold/50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-base text-cream mb-1">{member.name}</h3>
                <p className="text-cream/60 text-sm">{member.organization}</p>
                <p className="text-cream/40 text-xs mt-2">{member.term} term</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-cream mb-6">
            Get in Touch
          </h2>
          <p className="text-cream/80 mb-8 max-w-2xl mx-auto">
            Contact our team to discuss how Mason County can support your business.
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
