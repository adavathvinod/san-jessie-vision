import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-primary-foreground">
      {/* Gold accent line */}
      <div className="gold-accent-line" />
      
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold tracking-tight">San Jessie</h3>
              <p className="text-xs uppercase tracking-[0.25em] text-gold font-medium mt-1">
                Commercial Real Estate
              </p>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed max-w-md">
              A San Francisco–based real estate holding company focused exclusively 
              on commercial properties throughout the Bay Area. We are committed to 
              long-term ownership and disciplined value creation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-gold transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70">
                  471 Jessie Street, #3<br />
                  San Francisco, CA 94103
                </span>
              </li>
              <li>
                <a
                  href="tel:+14159337709"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-gold transition-colors duration-300"
                >
                  <Phone className="h-5 w-5 text-gold shrink-0" />
                  (415) 933-7709
                </a>
              </li>
              <li>
                <a
                  href="mailto:davenfrisco@aol.com"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-gold transition-colors duration-300"
                >
                  <Mail className="h-5 w-5 text-gold shrink-0" />
                  davenfrisco@aol.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © {currentYear} San Jessie LLC. All rights reserved.
            </p>
            <p className="text-primary-foreground/50 text-sm">
              San Francisco Bay Area Commercial Real Estate
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
