import { Link } from "react-router-dom";
import { ArrowRight, Building2, TrendingUp, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import heroImage from "@/assets/hero-sf-commercial.jpg";

const services = [
  {
    icon: Building2,
    title: "Rental Properties",
    description:
      "Premium commercial spaces across the Bay Area, meticulously maintained to support thriving businesses.",
    link: "/services",
  },
  {
    icon: TrendingUp,
    title: "Acquisition Consulting",
    description:
      "Strategic guidance for identifying and acquiring high-value commercial real estate investments.",
    link: "/services",
  },
  {
    icon: Shield,
    title: "Asset Management",
    description:
      "Disciplined management focused on preserving and enhancing the long-term value of real estate assets.",
    link: "/services",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 hero-overlay" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-primary-foreground/5 backdrop-blur-sm mb-8 opacity-0 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-sm text-gold font-medium tracking-wide">
                San Francisco Bay Area
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-8 opacity-0 animate-fade-in animation-delay-200">
              Commercial Real Estate
              <span className="block text-gold mt-2">Built on Trust</span>
            </h1>

            {/* Mission Statement */}
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-3xl mx-auto mb-12 opacity-0 animate-fade-in animation-delay-400">
              To deliver dependable, well-managed commercial spaces that support 
              thriving businesses while preserving and enhancing the long-term 
              value of our real estate assets.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in animation-delay-600">
              <Button asChild variant="hero" size="xl">
                <Link to="/services">
                  Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="hero-outline" size="xl">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-600">
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-gold rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Focused on Bay Area Commercial Properties
            </h2>
            <div className="section-divider mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {["Retail", "Industrial", "Mixed-Use"].map((type) => (
              <div
                key={type}
                className="text-center p-8 bg-background rounded-sm shadow-sm border border-border hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {type}
                </h3>
                <p className="text-muted-foreground">
                  Commercial assets in the San Francisco Bay Area
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Comprehensive Real Estate Services
            </h2>
            <div className="section-divider mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group p-8 bg-background border border-border rounded-sm hover:border-gold/50 hover:shadow-xl transition-all duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-sm bg-navy flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-300">
                  <service.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-gold font-medium hover:gap-3 transition-all duration-300 gap-2"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-navy text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-12">
              Built on Stability & Trust
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Operational Efficiency",
                  description: "Streamlined management that maximizes value for tenants and stakeholders.",
                },
                {
                  title: "Stable Partnerships",
                  description: "Long-term tenant relationships built on reliability and mutual success.",
                },
                {
                  title: "Disciplined Management",
                  description: "Strategic asset oversight focused on preserving and growing value.",
                },
              ].map((value) => (
                <div key={value.title} className="text-center">
                  <h3 className="text-lg font-semibold text-gold mb-3">
                    {value.title}
                  </h3>
                  <p className="text-primary-foreground/70">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Discuss Your Commercial Real Estate Needs?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us today to learn how San Jessie LLC can support your business 
              with dependable, well-managed commercial spaces.
            </p>
            <Button asChild variant="navy" size="xl">
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
