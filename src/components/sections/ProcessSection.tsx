
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { motion } from "framer-motion";

export function ProcessSection() {
  const processData = [
    {
      title: "Research",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-8">
            We begin with a comprehensive analysis of your business requirements, target audience, and competitive landscape to develop a strategic foundation for your digital presence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <motion.div 
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" 
                alt="Research phase" 
                className="w-full h-48 object-cover"
              />
            </motion.div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                <span>In-depth business needs assessment</span>
              </div>
              <div className="flex gap-3 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                <span>Comprehensive competitor analysis</span>
              </div>
              <div className="flex gap-3 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                <span>Technical requirements gathering</span>
              </div>
              <div className="flex gap-3 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                <span>Strategic technology stack selection</span>
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
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-8">
            Our expert development team transforms concepts into reality through iterative development cycles, continuous testing, and regular client checkpoints to ensure perfect alignment with your vision.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex flex-col gap-3">
              <div className="flex gap-3 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                <span>Agile development methodology</span>
              </div>
              <div className="flex gap-3 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                <span>Seamless frontend and backend integration</span>
              </div>
              <div className="flex gap-3 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                <span>Scalable database architecture</span>
              </div>
              <div className="flex gap-3 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                <span>Transparent progress tracking</span>
              </div>
            </div>
            <motion.div 
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80" 
                alt="Development phase" 
                className="w-full h-48 object-cover"
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
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
            We deliver a complete, enterprise-grade web solution with premium cloud hosting, proactive monitoring, and continuous optimization strategies that ensure your digital presence remains cutting-edge.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <motion.div 
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <img 
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80" 
                alt="Results phase" 
                className="w-full h-48 object-cover"
              />
            </motion.div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                <span>Performance-optimized infrastructure</span>
              </div>
              <div className="flex gap-3 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                <span>Enterprise-grade cloud hosting</span>
              </div>
              <div className="flex gap-3 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                <span>Advanced analytics integration</span>
              </div>
              <div className="flex gap-3 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                <span>Proactive maintenance and support</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return <Timeline data={processData} />;
}
