export const metadata = {
  title: "Agendas & Minutes | Mason County Development Authority",
  description:
    "Access meeting agendas and minutes from Mason County Development Authority board meetings.",
};

export default function AgendasMinutes() {
  return (
    <main className="bg-navy">
      {/* Hero */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream mb-6">
              Agendas & Minutes
            </h1>
            <p className="text-xl text-gold-light">
              Access meeting agendas and minutes from our board meetings.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="bg-slate/50 border border-gold/20 rounded-xl p-8 lg:p-12 text-center">
            <svg
              className="w-16 h-16 text-gold/50 mx-auto mb-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <h2 className="font-serif text-2xl text-cream mb-4">
              Meeting Documents
            </h2>
            <p className="text-cream/70 mb-8 max-w-xl mx-auto">
              Board meeting agendas and minutes are available upon request. Contact our
              office to request copies of specific meeting documents.
            </p>
            <div className="bg-navy/50 border border-gold/20 rounded-lg p-6 max-w-md mx-auto">
              <h3 className="text-gold font-medium mb-4">Request Documents</h3>
              <div className="text-cream/80 space-y-2 text-sm">
                <p>Phone: 304-675-1497</p>
                <p>Email: info@masoncounty.org</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meeting Info */}
      <section className="py-20 bg-slate">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl text-cream mb-6">Meeting Information</h2>
            <p className="text-cream/70 mb-8">
              The Mason County Development Authority holds regular board meetings. All
              meetings are open to the public. Contact our office for the current meeting
              schedule and location.
            </p>
            <a
              href="/about/contact"
              className="inline-block px-8 py-4 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-light transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
