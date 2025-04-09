
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { motion } from "framer-motion";

export function ProcessSection() {
  const processData = [
    {
      title: "Research",
      content: (
        <div>
          <p className="text-neutral-800 text-sm md:text-base font-normal mb-8">
            We begin with deep discovery — understanding your business goals, audience needs, and competitive landscape. This foundational research informs every decision that follows.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <motion.div 
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" 
                alt="Research phase" 
                className="w-full h-52 object-cover"
              />
            </motion.div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-center text-neutral-700 text-sm md:text-base">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                <span className="font-medium">Comprehensive market analysis</span>
              </div>
              <div className="flex gap-3 items-center text-neutral-700 text-sm md:text-base">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                <span className="font-medium">User experience research</span>
              </div>
              <div className="flex gap-3 items-center text-neutral-700 text-sm md:text-base">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                <span className="font-medium">Technical requirements gathering</span>
              </div>
              <div className="flex gap-3 items-center text-neutral-700 text-sm md:text-base">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                <span className="font-medium">Strategic tech stack selection</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Realize",
      content: (
        <div>
          <p className="text-neutral-800 text-sm md:text-base font-normal mb-8">
            This is where vision meets execution. Our expert team transforms concepts into tangible solutions through iterative development, rigorous testing, and continuous collaboration.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="flex flex-col gap-4 order-2 md:order-1">
              <div className="flex gap-3 items-center text-neutral-700 text-sm md:text-base">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                <span className="font-medium">Agile development methodology</span>
              </div>
              <div className="flex gap-3 items-center text-neutral-700 text-sm md:text-base">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                <span className="font-medium">Component-driven architecture</span>
              </div>
              <div className="flex gap-3 items-center text-neutral-700 text-sm md:text-base">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                <span className="font-medium">Continuous integration & deployment</span>
              </div>
              <div className="flex gap-3 items-center text-neutral-700 text-sm md:text-base">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                <span className="font-medium">Client-centric review cycles</span>
              </div>
            </div>
            <motion.div 
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-xl overflow-hidden shadow-lg order-1 md:order-2"
            >
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80" 
                alt="Development phase" 
                className="w-full h-52 object-cover"
              />
            </motion.div>
          </div>
        </div>
      ),
    },
    {
      title: "Results",
      content: (
        <div>
          <p className="text-neutral-800 text-sm md:text-base font-normal mb-8">
            Delivering is just the beginning. We ensure your solution performs flawlessly in the real world through comprehensive analytics, ongoing optimization, and dedicated support.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <motion.div 
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img 
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80" 
                alt="Results phase" 
                className="w-full h-52 object-cover"
              />
            </motion.div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-center text-neutral-700 text-sm md:text-base">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                <span className="font-medium">Performance optimization</span>
              </div>
              <div className="flex gap-3 items-center text-neutral-700 text-sm md:text-base">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                <span className="font-medium">Enterprise-grade cloud hosting</span>
              </div>
              <div className="flex gap-3 items-center text-neutral-700 text-sm md:text-base">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                <span className="font-medium">Advanced analytics integration</span>
              </div>
              <div className="flex gap-3 items-center text-neutral-700 text-sm md:text-base">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                <span className="font-medium">Proactive monitoring & support</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return <Timeline data={processData} />;
}
