export const metadata = {
  title: "Prospect Packet | Mason County Development Authority",
  description:
    "Download comprehensive data about Mason County for your site selection research.",
};

export default function ProspectPacket() {
  return (
    <main className="bg-navy">
      {/* Hero */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream mb-6">
              Prospect Packet
            </h1>
            <p className="text-xl text-gold-light">
              Everything you need to know about Mason County in one comprehensive document.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="bg-slate/50 border border-gold/20 rounded-xl p-8 lg:p-12">
            <h2 className="font-serif text-2xl text-cream mb-6">
              What's in the Prospect Packet
            </h2>
            <ul className="space-y-4 mb-8">
              {[
                "County overview and key selling points",
                "Detailed demographic data",
                "Workforce statistics and labor force analysis",
                "Major employers and industry sectors",
                "Available sites with specifications",
                "Infrastructure and transportation details",
                "Tax incentives summary",
                "Education and training resources",
                "Quality of life information",
                "Contact information for key officials",
              ].map((item) => (
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

            <div className="border-t border-gold/20 pt-8">
              <p className="text-cream/70 mb-6">
                Request a copy of our prospect packet by contacting us. We can also
                prepare custom data packages tailored to your specific project needs.
              </p>
              <a
                href="/about/contact"
                className="inline-block px-8 py-4 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-light transition-colors"
              >
                Request Prospect Packet
              </a>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "$6B+", label: "Active Investment" },
              { value: "200K+", label: "Workers in 60mi" },
              { value: "5th", label: "in Energy Production" },
              { value: "16-22%", label: "Below Avg Cost of Living" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-slate/50 border border-gold/20 rounded-lg p-6 text-center"
              >
                <div className="font-serif text-3xl text-gold mb-1">{stat.value}</div>
                <div className="text-cream/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-cream mb-6">
            Ready to Explore?
          </h2>
          <p className="text-cream/80 mb-8 max-w-2xl mx-auto">
            Browse our community data online or schedule a call to discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/community-data"
              className="inline-block px-8 py-4 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-light transition-colors"
            >
              View Community Data
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
