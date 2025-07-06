"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { testimonials } from "@/constants/testimonial";

export function TestimonialSection() {
  const hasTestimonials = testimonials && testimonials.length > 0;

  return (
    <section
      id="testimonials"
      className="bg-[#c0e6ea] py-20 text-gray-900"
      aria-labelledby="testimonial-heading"
      role="region"
    >
      <div className="mx-auto max-w-7xl px-6 text-center">
        <span className="mb-4 inline-block rounded-full bg-yellow-200 px-4 py-1 text-sm font-medium text-gray-800">
          Client Success Stories & Testimonials
        </span>

        <h2
          id="testimonial-heading"
          className="mb-4 text-4xl font-bold md:text-5xl"
        >
          What Former Clients Say
        </h2>

        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-800">
          Real experiences from individuals who have found healing and growth
          through our work together.
        </p>
      </div>

      <div className="relative flex items-center justify-center overflow-hidden rounded-md px-4 sm:px-6 md:px-12">
        {hasTestimonials ? (
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        ) : (
          <p className="text-center text-gray-700">
            No testimonials available at the moment.
          </p>
        )}
      </div>
    </section>
  );
}
