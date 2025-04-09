
import { MainLayout } from "@/components/layouts/MainLayout";
import { Hero } from "@/components/ui/animated-hero";
import { FeaturesSectionWithHoverEffects } from "@/components/blocks/feature-section-with-hover-effects";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <MainLayout>
      <div className="min-h-screen font-poppins">
        {/* Hero Section */}
        <section id="hero" className="bg-gradient-to-b from-white to-slate-50">
          <Hero />
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Enterprise-Grade Web Solutions</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Transforming your digital vision into powerful, scalable web experiences that drive business growth
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <FeaturesSectionWithHoverEffects />
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-16 bg-gradient-to-b from-white to-slate-50">
          <ProcessSection />
        </section>

        {/* Why Choose Us Section */}
        <section id="why-choose-us">
          <WhyChooseSection />
        </section>

        {/* FAQ Section */}
        <section id="faq">
          <FaqSection />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <ContactSection />
        </section>

        {/* Footer */}
        <FooterSection />
      </div>
    </MainLayout>
  );
};

export default Index;
