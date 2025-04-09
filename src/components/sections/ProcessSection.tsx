
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
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Business needs assessment
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Competitor analysis
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Technical requirements gathering
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Technology stack selection
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
          <div className="flex flex-col gap-4 mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Agile development process
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Frontend and backend implementation
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Database architecture
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Regular progress updates
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
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Performance optimized deployment
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Premium cloud hosting configuration
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Comprehensive analytics integration
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Ongoing maintenance and support
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Continuous improvement plan
            </div>
          </div>
        </div>
      ),
    },
  ];
  return <Timeline data={processData} />;
}
