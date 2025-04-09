
import { TiltedScroll } from "@/components/ui/tilted-scroll";

export function WhyChooseSection() {
  const whyChooseItems = [
    { id: "1", text: "10+ years of industry experience" },
    { id: "2", text: "Full-stack development expertise" },
    { id: "3", text: "Dedicated project managers" },
    { id: "4", text: "Transparent communication" },
    { id: "5", text: "Premium hosting infrastructure" },
    { id: "6", text: "Ongoing technical support" },
    { id: "7", text: "Performance optimization" },
    { id: "8", text: "Security-first approach" },
  ];

  return (
    <div className="py-20 bg-slate-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We deliver exceptional web development services with a focus on quality, 
            performance, and client satisfaction.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="w-full md:w-1/2 max-w-xl">
            <h3 className="text-2xl font-semibold mb-6">What makes us different?</h3>
            <p className="mb-4">
              At Instant Web, we combine technical expertise with business understanding to 
              deliver web solutions that not only look great but also drive results for your business.
            </p>
            <p className="mb-4">
              Our full-stack approach ensures seamless integration between all components of your 
              web application, resulting in better performance and user experience.
            </p>
            <p>
              With our premium hosting services, your website will always be fast, secure, and 
              reliable, giving you peace of mind and allowing you to focus on growing your business.
            </p>
          </div>
          
          <TiltedScroll 
            items={whyChooseItems}
            className="w-full md:w-1/2"
          />
        </div>
      </div>
    </div>
  );
}
