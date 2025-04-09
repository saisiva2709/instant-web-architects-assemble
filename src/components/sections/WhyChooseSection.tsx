
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

export function WhyChooseSection() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  
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

  useEffect(() => {
    controls.start({
      y: ["0%", "-50%"],
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 20,
        ease: "linear"
      }
    });
  }, [controls]);

  return (
    <div className="py-20 bg-gradient-to-b from-slate-50 to-slate-100">
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
          
          <div className="w-full md:w-1/2 h-[400px] overflow-hidden">
            <div className="relative overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_80%,transparent)] h-full">
              <motion.div
                ref={cardsRef}
                className="grid gap-5 grid-cols-1 pb-8"
                animate={controls}
              >
                {[...whyChooseItems, ...whyChooseItems].map((item, index) => (
                  <div
                    key={`${item.id}-${index}`}
                    className="group flex items-center gap-2 cursor-pointer rounded-md border border-border/40 bg-gradient-to-b from-background/80 to-muted/80 p-4 shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-xl dark:border-border"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 mr-2 stroke-foreground/40 transition-colors group-hover:stroke-foreground"
                    >
                      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    <p className="text-foreground/80 transition-colors group-hover:text-foreground">
                      {item.text}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
