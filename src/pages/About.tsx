import { Link } from "react-router-dom";
import { ArrowRight, Target, Award, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import aboutImage from "@/assets/about-sf-skyline.jpg";

const values = [
  {
    icon: Target,
    title: "Focused Strategy",
    description:
      "Exclusively dedicated to commercial properties in the San Francisco Bay Area, allowing us to develop deep market expertise.",
  },
  {
    icon: Award,
    title: "Quality Assets",
    description:
      "Our portfolio consists of carefully selected retail, industrial, and mixed-use properties that meet our rigorous standards.",
  },
  {
    icon: Users,
    title: "Tenant Partnerships",
    description:
      "We view our tenants as partners, fostering long-term relationships through responsive management and fair practices.",
  },
  {
    icon: TrendingUp,
    title: "Value Creation",
    description:
      "Our disciplined approach to asset management focuses on preserving and enhancing property value over the long term.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-navy text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${aboutImage})` }}
          />
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-8 leading-tight">
              A Bay Area Real Estate
              <span className="block text-gold">Holding Company</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              San Jessie LLC is a San Francisco–based real estate holding company 
              focused exclusively on commercial properties throughout the Bay Area.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                Our Mission
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-8">
                Delivering Dependable Commercial Spaces
              </h2>
              <div className="prose prose-lg">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  <span className="text-foreground font-medium">
                    To deliver dependable, well-managed commercial spaces that support 
                    thriving businesses while preserving and enhancing the long-term 
                    value of our real estate assets.
                  </span>
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We specialize in acquiring, managing, and enhancing commercial real 
                  estate assets across the San Francisco Bay Area. Our portfolio 
                  encompasses retail, industrial, and mixed-use properties, each 
                  selected for its strategic location and potential for stable, 
                  long-term value creation.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our approach is grounded in disciplined asset management, operational 
                  efficiency, and a commitment to fostering stable tenant partnerships. 
                  We believe that well-managed properties create thriving environments 
                  for businesses and lasting value for stakeholders.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={aboutImage}
                alt="San Francisco Bay Area Commercial District"
                className="rounded-sm shadow-2xl w-full"
                loading="lazy"
              />
              <div className="absolute -bottom-8 -left-8 bg-gold p-8 rounded-sm shadow-xl">
                <p className="text-3xl font-bold text-navy-dark">Bay Area</p>
                <p className="text-sm text-navy-dark/80 uppercase tracking-wider">
                  Focused Expertise
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              What Sets Us Apart
            </h2>
            <div className="section-divider mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-8 bg-background border border-border rounded-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-sm bg-navy flex items-center justify-center mb-6">
                  <value.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-24 bg-navy text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Our Focus
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">
              Commercial Property Types
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            {[
              {
                title: "Retail Properties",
                description: "Prime retail locations that serve local communities and drive business success.",
              },
              {
                title: "Industrial Assets",
                description: "Strategic industrial facilities supporting logistics and manufacturing operations.",
              },
              {
                title: "Mixed-Use Developments",
                description: "Versatile properties combining commercial spaces for diverse tenant needs.",
              },
            ].map((focus) => (
              <div key={focus.title} className="p-6">
                <h3 className="text-lg font-semibold text-gold mb-4">{focus.title}</h3>
                <p className="text-primary-foreground/70">{focus.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Interested in Learning More?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Discover how our services can support your commercial real estate needs 
              in the San Francisco Bay Area.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild variant="gold" size="xl">
                <Link to="/services">
                  View Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="navy-outline" size="xl">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
