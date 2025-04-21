
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function ProcessSection() {
  const processData = [
    {
      title: "Research",
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700 text-lg leading-relaxed">
            We begin with deep discovery — understanding your business goals, audience needs, and competitive landscape. This foundational research informs every decision that follows.
          </p>
          <div className="grid gap-4">
            <div className="flex flex-col gap-4 bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-blue-600">Strategic Analysis</h4>
                <ul className="space-y-3 text-neutral-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 mt-2 mr-2 rounded-full bg-blue-500"></div>
                    Comprehensive market research and competitor analysis
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 mt-2 mr-2 rounded-full bg-blue-500"></div>
                    User experience research and persona development
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 mt-2 mr-2 rounded-full bg-blue-500"></div>
                    Technical requirements gathering and analysis
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Realize",
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700 text-lg leading-relaxed">
            This is where vision meets execution. Our expert team transforms concepts into tangible solutions through iterative development, rigorous testing, and continuous collaboration.
          </p>
          <div className="grid gap-4">
            <div className="flex flex-col gap-4 bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-blue-600">Development Excellence</h4>
                <ul className="space-y-3 text-neutral-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 mt-2 mr-2 rounded-full bg-blue-500"></div>
                    Agile development with continuous integration
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 mt-2 mr-2 rounded-full bg-blue-500"></div>
                    Modern tech stack implementation
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 mt-2 mr-2 rounded-full bg-blue-500"></div>
                    Robust testing and quality assurance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Results",
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700 text-lg leading-relaxed">
            Delivering is just the beginning. We ensure your solution performs flawlessly in the real world through comprehensive analytics, ongoing optimization, and dedicated support.
          </p>
          <div className="grid gap-4">
            <div className="flex flex-col gap-4 bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-blue-600">Continuous Improvement</h4>
                <ul className="space-y-3 text-neutral-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 mt-2 mr-2 rounded-full bg-blue-500"></div>
                    Performance monitoring and optimization
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 mt-2 mr-2 rounded-full bg-blue-500"></div>
                    Data-driven insights and recommendations
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 mt-2 mr-2 rounded-full bg-blue-500"></div>
                    Proactive maintenance and support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];
  
  return <Timeline data={processData} />;
}
