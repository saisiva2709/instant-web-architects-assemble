
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
  const faqItems = [
    {
      question: "What technologies do you use?",
      answer: "We use the latest technologies for web development, including React, Next.js, Node.js, and modern cloud infrastructure. Our stack is always up-to-date to ensure optimal performance and security."
    },
    {
      question: "How much does a website cost?",
      answer: "Website costs vary based on your specific requirements. We offer tailored solutions starting from simple landing pages to complex web applications. Contact us for a free consultation and quote based on your project needs."
    },
    {
      question: "How long does it take to build a website?",
      answer: "Timeline depends on project complexity. Simple websites can be completed in 2-4 weeks, while complex web applications may take 2-3 months. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do you offer hosting services?",
      answer: "Yes, we provide premium hosting services with 99.9% uptime guarantee, regular backups, and 24/7 monitoring. Our hosting infrastructure is optimized for speed, security, and reliability."
    },
    {
      question: "What support do you offer after launch?",
      answer: "We offer ongoing maintenance packages that include regular updates, security patches, performance monitoring, and content updates. Our support team is available to quickly address any issues that arise."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-slate-100 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our web development and hosting services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
