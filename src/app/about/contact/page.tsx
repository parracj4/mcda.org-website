export const metadata = {
  title: "Contact | Mason County Development Authority",
  description:
    "Contact the Mason County Development Authority to discuss your project or learn more about opportunities in Mason County, West Virginia.",
};

export default function Contact() {
  return (
    <main className="bg-navy">
      {/* Hero */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gold-light">
              Ready to explore opportunities in Mason County? Get in touch with our team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="font-serif text-3xl text-cream mb-8">Get in Touch</h2>

              {/* Executive Director */}
              <div className="bg-slate/50 border border-gold/20 rounded-xl p-6 mb-6">
                <h3 className="font-serif text-xl text-gold mb-4">Executive Director</h3>
                <div className="space-y-3">
                  <p className="text-cream text-lg font-medium">Anna M. Rittenhouse</p>
                  <div className="flex items-center gap-3 text-cream/80">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:Anna.Rittenhouse@masoncounty.org" className="hover:text-gold transition-colors">
                      Anna.Rittenhouse@masoncounty.org
                    </a>
                  </div>
                </div>
              </div>

              {/* Office */}
              <div className="bg-slate/50 border border-gold/20 rounded-xl p-6 mb-6">
                <h3 className="font-serif text-xl text-gold mb-4">Office</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-cream/80">
                    <svg className="w-5 h-5 text-gold mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <address className="not-italic">
                      305 Main Street<br />
                      Point Pleasant, WV 25550
                    </address>
                  </div>
                  <div className="flex items-center gap-3 text-cream/80">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:304-675-1497" className="hover:text-gold transition-colors">
                      304-675-1497
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-cream/80">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                    </svg>
                    <span>Fax: 304-675-1601</span>
                  </div>
                  <div className="flex items-center gap-3 text-cream/80">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:info@masoncounty.org" className="hover:text-gold transition-colors">
                      info@masoncounty.org
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Placeholder */}
            <div>
              <h2 className="font-serif text-3xl text-cream mb-8">Send a Message</h2>
              <div className="bg-slate/50 border border-gold/20 rounded-xl p-6">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-cream/80 text-sm mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 bg-navy border border-gold/20 rounded-lg text-cream placeholder-cream/40 focus:outline-none focus:border-gold/50 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-cream/80 text-sm mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-navy border border-gold/20 rounded-lg text-cream placeholder-cream/40 focus:outline-none focus:border-gold/50 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-cream/80 text-sm mb-2">
                      Company (optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 bg-navy border border-gold/20 rounded-lg text-cream placeholder-cream/40 focus:outline-none focus:border-gold/50 transition-colors"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-cream/80 text-sm mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 bg-navy border border-gold/20 rounded-lg text-cream placeholder-cream/40 focus:outline-none focus:border-gold/50 transition-colors resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-light transition-colors"
                  >
                    Send Message
                  </button>
                </form>
                <p className="text-cream/50 text-sm mt-4 text-center">
                  We typically respond within 1-2 business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20 bg-slate">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-serif text-3xl text-cream text-center mb-8">
            Our Location
          </h2>
          <div className="bg-navy/50 border border-gold/20 rounded-xl p-8 text-center">
            <div className="aspect-video bg-navy rounded-lg flex items-center justify-center mb-4">
              <div className="text-center">
                <svg className="w-16 h-16 text-gold/30 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-cream/60">305 Main Street, Point Pleasant, WV 25550</p>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=305+Main+Street+Point+Pleasant+WV+25550"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
            >
              Open in Google Maps
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
