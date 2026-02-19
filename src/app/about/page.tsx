import Link from "next/link";

export const metadata = {
  title: "About | Mason County Development Authority",
  description:
    "Learn about the Mason County Development Authority and our mission to promote economic growth in Mason County, West Virginia.",
};

const sections = [
  {
    title: "Board of Directors",
    href: "/about/board",
    description: "Meet our leadership team guiding economic development in Mason County.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Agendas & Minutes",
    href: "/about/agendas-minutes",
    description: "Access meeting agendas and minutes from our board meetings.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Contact",
    href: "/about/contact",
    description: "Get in touch with our team to discuss your project.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <main className="bg-navy">
      {/* Hero */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream mb-6">
              About MCDA
            </h1>
            <p className="text-xl text-gold-light">
              The Mason County Development Authority promotes economic growth, job
              creation, and quality of life improvements in Mason County, West Virginia.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-slate">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl text-cream mb-6">Our Mission</h2>
            <p className="text-cream/80 text-lg mb-8">
              The Mason County Development Authority works to attract new business and
              industry, support existing employers, and create opportunities for
              economic advancement in our community. We serve as the primary point of
              contact for companies considering Mason County for expansion or relocation.
            </p>
            <div className="bg-navy/50 border border-gold/30 rounded-lg p-6">
              <p className="font-serif text-2xl text-gold italic">
                "A Place to Grow"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {sections.map((section) => (
              <Link
                key={section.title}
                href={section.href}
                className="group bg-slate/50 border border-gold/20 rounded-lg p-8 hover:border-gold/50 transition-colors"
              >
                <div className="text-gold mb-4">{section.icon}</div>
                <h2 className="font-serif text-2xl text-cream mb-3 group-hover:text-gold transition-colors">
                  {section.title}
                </h2>
                <p className="text-cream/70">{section.description}</p>
                <div className="mt-6 text-gold flex items-center gap-2">
                  Learn more
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-slate">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-cream text-center mb-12">
              Contact Information
            </h2>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="bg-navy/50 border border-gold/20 rounded-lg p-6">
                <h3 className="font-serif text-xl text-gold mb-4">Office</h3>
                <address className="not-italic text-cream/80 space-y-2">
                  <p>305 Main Street</p>
                  <p>Point Pleasant, WV 25550</p>
                </address>
              </div>
              <div className="bg-navy/50 border border-gold/20 rounded-lg p-6">
                <h3 className="font-serif text-xl text-gold mb-4">Contact</h3>
                <div className="text-cream/80 space-y-2">
                  <p>Phone: 304-675-1497</p>
                  <p>Fax: 304-675-1601</p>
                  <p>Email: info@masoncounty.org</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
