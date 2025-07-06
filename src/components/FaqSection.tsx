"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/constants/faq";

export function FaqSection() {
  return (
    <section
      id="faq"
      className="bg-[#c6e6ea] py-20 md:px-10"
      role="region"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-7xl px-6">
        <h2
          id="faq-heading"
          className="mb-4 text-center text-4xl font-bold text-gray-900 md:text-5xl"
        >
          Frequently Asked Questions
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-center text-lg text-gray-800">
          Answers to common questions about therapy, session structure, and what
          to expect when working with Dr. Serena Blake.
        </p>

        <Accordion
          type="single"
          collapsible
          className="w-full divide-y divide-[#004346]/10"
        >
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`} className="py-4">
              <AccordionTrigger className="text-left text-xl font-semibold text-[#004346] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004346] md:text-2xl">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-[#234245] md:text-lg">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
