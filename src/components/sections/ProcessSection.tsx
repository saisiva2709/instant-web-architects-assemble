
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function ProcessSection() {
  const processData = [
    {
      title: "Research",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            We thoroughly analyze your business requirements, target audience, and market positioning to develop a strategic approach for your web project.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" 
                alt="Research phase" 
                className="w-full h-40 object-cover"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Business needs assessment
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Competitor analysis
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Technical requirements gathering
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Technology stack selection
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
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Our expert development team brings your vision to life through agile development practices, constant testing, and regular client feedback loops.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Agile development process
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Frontend and backend implementation
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Database architecture
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Regular progress updates
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80" 
                alt="Development phase" 
                className="w-full h-40 object-cover"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Results",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            We deliver a complete web solution with premium hosting, ongoing support, and continuous improvement strategies to ensure sustainable success.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80" 
                alt="Results phase" 
                className="w-full h-40 object-cover"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Performance optimized deployment
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Premium cloud hosting configuration
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Comprehensive analytics integration
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Ongoing maintenance and support
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return <Timeline data={processData} />;
}
