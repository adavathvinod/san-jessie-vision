import { Link } from "react-router-dom";
import { ArrowRight, Building2, TrendingUp, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import serviceRetail from "@/assets/service-retail.jpg";
import serviceIndustrial from "@/assets/service-industrial.jpg";
import serviceMixedUse from "@/assets/service-mixed-use.jpg";

const services = [
  {
    id: "rental",
    icon: Building2,
    title: "Rental Properties",
    subtitle: "Premium Commercial Spaces",
    description:
      "San Jessie LLC offers high-quality commercial rental properties across the San Francisco Bay Area. Our portfolio includes carefully maintained retail, industrial, and mixed-use spaces designed to support thriving businesses.",
    features: [
      "Prime Bay Area locations in established commercial corridors",
      "Well-maintained facilities with responsive property management",
      "Flexible lease terms tailored to business needs",
      "Professional tenant support and communication",
      "Strategic locations with strong foot traffic and accessibility",
    ],
    image: serviceRetail,
  },
  {
    id: "acquisition",
    icon: TrendingUp,
    title: "Acquisition Consulting",
    subtitle: "Strategic Investment Guidance",
    description:
      "Leverage our deep expertise in Bay Area commercial real estate to identify and evaluate high-value acquisition opportunities. We provide comprehensive market analysis and strategic guidance for investors seeking quality commercial properties.",
    features: [
      "In-depth market analysis and property evaluation",
      "Due diligence support and risk assessment",
      "Investment strategy development aligned with your goals",
      "Access to off-market opportunities through local networks",
      "Post-acquisition integration planning",
    ],
    image: serviceIndustrial,
  },
  {
    id: "management",
    icon: Shield,
    title: "Asset Management",
    subtitle: "Disciplined Value Preservation",
    description:
      "Our disciplined asset management approach focuses on preserving and enhancing the long-term value of commercial real estate investments. We combine operational efficiency with strategic oversight to maximize returns.",
    features: [
      "Comprehensive property performance monitoring",
      "Strategic capital improvement planning",
      "Tenant retention and relationship management",
      "Operational cost optimization",
      "Regular financial reporting and analysis",
    ],
    image: serviceMixedUse,
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-navy text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-8 leading-tight">
              Comprehensive Commercial
              <span className="block text-gold">Real Estate Services</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              From premium rental properties to strategic acquisition consulting 
              and disciplined asset management, we provide end-to-end solutions 
              for commercial real estate in the Bay Area.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detailed */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-24 ${index % 2 === 0 ? "bg-background" : "bg-cream"}`}
        >
          <div className="container mx-auto px-6">
            <div
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="w-14 h-14 rounded-sm bg-navy flex items-center justify-center mb-6">
                  <service.icon className="h-7 w-7 text-gold" />
                </div>
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                  {service.subtitle}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                  {service.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {service.description}
                </p>
                <ul className="space-y-4 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="gold">
                  <Link to="/contact">
                    Inquire About This Service
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-sm shadow-2xl w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Property Types */}
      <section className="py-24 bg-navy text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Property Focus
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">
              Bay Area Commercial Property Types
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Retail Properties",
                description:
                  "Street-front retail, shopping centers, and neighborhood commercial spaces in high-traffic locations.",
              },
              {
                title: "Industrial Assets",
                description:
                  "Warehouses, distribution centers, and light industrial facilities strategically located for logistics.",
              },
              {
                title: "Mixed-Use Developments",
                description:
                  "Versatile properties combining retail, office, and commercial spaces for diverse business needs.",
              },
            ].map((type) => (
              <div
                key={type.title}
                className="p-8 border border-primary-foreground/10 rounded-sm hover:border-gold/50 transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold text-gold mb-4">{type.title}</h3>
                <p className="text-primary-foreground/70 leading-relaxed">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us today to discuss how our services can support your 
              commercial real estate objectives in the San Francisco Bay Area.
            </p>
            <Button asChild variant="navy" size="xl">
              <Link to="/contact">
                Contact Us Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
