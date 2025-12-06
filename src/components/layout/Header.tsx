import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className={cn(
              "flex flex-col transition-colors duration-300",
              isScrolled ? "text-foreground" : "text-primary-foreground"
            )}>
              <span className="text-xl md:text-2xl font-bold tracking-tight">
                San Jessie
              </span>
              <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-gold font-medium -mt-1">
                Commercial Real Estate
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors duration-300 relative group",
                  location.pathname === link.href
                    ? isScrolled
                      ? "text-gold"
                      : "text-gold"
                    : isScrolled
                    ? "text-foreground hover:text-gold"
                    : "text-primary-foreground/80 hover:text-primary-foreground"
                )}
              >
                {link.name}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-gold transition-all duration-300",
                    location.pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+14159337709"
              className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors duration-300",
                isScrolled
                  ? "text-foreground hover:text-gold"
                  : "text-primary-foreground/80 hover:text-primary-foreground"
              )}
            >
              <Phone className="h-4 w-4" />
              (415) 933-7709
            </a>
            <Button
              asChild
              variant={isScrolled ? "gold" : "gold"}
              size="lg"
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "lg:hidden p-2 transition-colors duration-300",
              isScrolled ? "text-foreground" : "text-primary-foreground"
            )}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-xl transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-base font-medium py-2 transition-colors duration-300",
                location.pathname === link.href
                  ? "text-gold"
                  : "text-foreground hover:text-gold"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-border">
            <a
              href="tel:+14159337709"
              className="flex items-center gap-2 text-sm text-muted-foreground mb-4"
            >
              <Phone className="h-4 w-4" />
              (415) 933-7709
            </a>
            <Button asChild variant="gold" className="w-full">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
