
import { Hero } from "@/components/ui/animated-hero";
import { FeaturesSectionWithHoverEffects } from "@/components/blocks/feature-section-with-hover-effects";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="bg-white">
        <Hero />
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive web development solutions tailored to your business needs
            </p>
          </div>
          <FeaturesSectionWithHoverEffects />
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-16 bg-white">
        <ProcessSection />
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us">
        <WhyChooseSection />
      </section>

      {/* Placeholder for future sections */}
      <div className="py-16 text-center text-gray-500">
        <p>More sections coming soon...</p>
      </div>
    </div>
  );
};

export default Index;
