
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export function FaqSection() {
  const faqItems = [
    {
      question: "What technologies do you use for web development?",
      answer: "We utilize cutting-edge technologies including React, Next.js, Node.js, and modern cloud infrastructure like AWS and Google Cloud. Our stack is continuously updated to incorporate the latest advancements, ensuring optimal performance, security, and scalability for your project."
    },
    {
      question: "How do your web development services compare in pricing?",
      answer: "Our pricing is structured based on project scope, complexity, and timeline. We offer transparent, value-based packages starting from basic landing pages to complex enterprise applications. We provide detailed quotes following an initial consultation to ensure you receive a tailored solution that fits your budget and objectives."
    },
    {
      question: "What is your typical timeline for completing a web project?",
      answer: "Project timelines vary based on complexity and specific requirements. Simple websites typically take 2-4 weeks, while complex web applications may require 2-3 months. Our agile methodology allows us to deliver incremental value throughout development, with your first functional prototype available within the initial two weeks."
    },
    {
      question: "What kind of hosting infrastructure do you provide?",
      answer: "We offer enterprise-grade hosting solutions with 99.9% uptime guarantee, automatic scaling, redundant backups, and 24/7 performance monitoring. Our infrastructure is optimized for speed, security, and reliability, with distributed CDN deployment to ensure consistent performance globally."
    },
    {
      question: "What support services do you offer after the website launch?",
      answer: "We provide comprehensive post-launch support including regular maintenance, security patching, performance monitoring, content updates, and technical troubleshooting. Our support packages are tiered to meet different needs, from basic monitoring to comprehensive growth partnerships with dedicated development hours each month."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-slate-100 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our web development and hosting services
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
