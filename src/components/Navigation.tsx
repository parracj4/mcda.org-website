"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Why Mason County", href: "/why-mason-county" },
  {
    label: "Business & Industry",
    href: "/business",
    children: [
      { label: "Major Investments", href: "/business/investments" },
      { label: "Top Employers", href: "/business/employers" },
      { label: "Workforce Development", href: "/business/workforce" },
      { label: "Tax Incentives", href: "/business/tax-incentives" },
    ],
  },
  { label: "Available Sites", href: "/sites" },
  {
    label: "Data & Resources",
    href: "/community-data",
    children: [
      { label: "Community Data", href: "/community-data" },
      { label: "Prospect Packet", href: "/prospect-packet" },
    ],
  },
  { label: "Quality of Life", href: "/quality-of-life" },
  { label: "News", href: "/news" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Board of Directors", href: "/about/board" },
      { label: "Agendas & Minutes", href: "/about/agendas-minutes" },
      { label: "Contact", href: "/about/contact" },
    ],
  },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
    setExpandedItems([]);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleExpanded = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center justify-between p-4 sm:p-6">
          {/* Logo */}
          <Link
            href="/"
            className="relative z-50 flex items-center gap-3 group"
            onClick={() => setIsOpen(false)}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gold rounded-lg flex items-center justify-center shadow-lg group-hover:bg-gold-light transition-colors">
              <span className="font-serif text-navy text-lg sm:text-xl font-bold">M</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-serif text-cream text-lg leading-tight drop-shadow-lg">
                Mason County
              </div>
              <div className="text-gold text-xs tracking-wide drop-shadow-lg">
                Development Authority
              </div>
            </div>
          </Link>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 w-12 h-12 flex items-center justify-center rounded-lg bg-navy/80 backdrop-blur-sm border border-gold/20 hover:border-gold/50 transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 bg-gold transition-all duration-300 origin-center ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-gold transition-all duration-300 ${
                  isOpen ? "opacity-0 scale-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-gold transition-all duration-300 origin-center ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Full-screen Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Background */}
        <div className="absolute inset-0 bg-navy/98 backdrop-blur-xl" />

        {/* Menu Content */}
        <nav className="relative h-full overflow-y-auto pt-24 pb-12 px-6 sm:px-12">
          <div className="max-w-4xl mx-auto">
            {/* Navigation Items */}
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <li
                  key={item.label}
                  className={`transform transition-all duration-500 ${
                    isOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: isOpen ? `${index * 50}ms` : "0ms" }}
                >
                  {item.children ? (
                    // Item with children
                    <div>
                      <button
                        onClick={() => toggleExpanded(item.label)}
                        className="w-full flex items-center justify-between py-3 group"
                      >
                        <span
                          className={`font-serif text-2xl sm:text-3xl transition-colors ${
                            pathname === item.href || pathname.startsWith(item.href + "/")
                              ? "text-gold"
                              : "text-cream group-hover:text-gold"
                          }`}
                        >
                          {item.label}
                        </span>
                        <svg
                          className={`w-6 h-6 text-gold transition-transform duration-300 ${
                            expandedItems.includes(item.label) ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {/* Sub-items */}
                      <ul
                        className={`overflow-hidden transition-all duration-300 ${
                          expandedItems.includes(item.label)
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <li>
                          <Link
                            href={item.href}
                            className={`block py-2 pl-6 text-lg transition-colors ${
                              pathname === item.href
                                ? "text-gold"
                                : "text-cream/60 hover:text-gold"
                            }`}
                          >
                            Overview
                          </Link>
                        </li>
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className={`block py-2 pl-6 text-lg transition-colors ${
                                pathname === child.href
                                  ? "text-gold"
                                  : "text-cream/60 hover:text-gold"
                              }`}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    // Simple item
                    <Link
                      href={item.href}
                      className={`block py-3 font-serif text-2xl sm:text-3xl transition-colors ${
                        pathname === item.href
                          ? "text-gold"
                          : "text-cream hover:text-gold"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div
              className={`mt-12 pt-8 border-t border-gold/20 transform transition-all duration-500 ${
                isOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: isOpen ? "400ms" : "0ms" }}
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-gold text-sm uppercase tracking-wide mb-2">
                    Contact
                  </h3>
                  <p className="text-cream/70">304-675-1497</p>
                  <p className="text-cream/70">info@masoncounty.org</p>
                </div>
                <div>
                  <h3 className="text-gold text-sm uppercase tracking-wide mb-2">
                    Address
                  </h3>
                  <p className="text-cream/70">305 Main Street</p>
                  <p className="text-cream/70">Point Pleasant, WV 25550</p>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href="/about/contact"
                className="inline-block mt-8 px-8 py-4 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-light transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
