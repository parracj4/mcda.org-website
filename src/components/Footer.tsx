import Link from "next/link";

const footerLinks = [
  {
    title: "Business",
    links: [
      { label: "Major Investments", href: "/business/investments" },
      { label: "Top Employers", href: "/business/employers" },
      { label: "Workforce", href: "/business/workforce" },
      { label: "Tax Incentives", href: "/business/tax-incentives" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Available Sites", href: "/sites" },
      { label: "Community Data", href: "/community-data" },
      { label: "County Map", href: "/map" },
      { label: "Prospect Packet", href: "/prospect-packet" },
      { label: "News", href: "/news" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Why Mason County", href: "/why-mason-county" },
      { label: "Quality of Life", href: "/quality-of-life" },
      { label: "Board of Directors", href: "/about/board" },
      { label: "Contact", href: "/about/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative z-10 bg-slate border-t border-gold/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
                <span className="font-serif text-navy text-lg font-bold">M</span>
              </div>
              <div>
                <div className="font-serif text-cream text-sm leading-tight">
                  Mason County
                </div>
                <div className="text-gold text-xs">Development Authority</div>
              </div>
            </Link>
            <p className="text-cream/60 text-sm mb-4">
              A Place to Grow
            </p>
            <div className="text-cream/60 text-sm space-y-1">
              <p>305 Main Street</p>
              <p>Point Pleasant, WV 25550</p>
              <p className="mt-2">
                <a href="tel:304-675-1497" className="hover:text-gold transition-colors">
                  304-675-1497
                </a>
              </p>
              <p>
                <a href="mailto:info@masoncounty.org" className="hover:text-gold transition-colors">
                  info@masoncounty.org
                </a>
              </p>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-serif text-cream text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-cream/60 text-sm hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gold/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-cream/40 text-sm">
            &copy; {new Date().getFullYear()} Mason County Development Authority. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/about" className="text-cream/40 text-sm hover:text-gold transition-colors">
              About
            </Link>
            <Link href="/about/contact" className="text-cream/40 text-sm hover:text-gold transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
