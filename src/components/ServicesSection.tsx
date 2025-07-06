"use client";

import { services } from "@/constants/services";
import Image from "next/image";
import Link from "next/link";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-white py-20"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2
          id="services-heading"
          className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl"
        >
          Services
        </h2>
        <p className="mb-10 text-lg text-gray-800">
          Each session is thoughtfully designed to provide effective,
          evidence-based support.
        </p>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-[#004346] bg-[#c0e6ea] p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#09bc8a] hover:shadow-lg"
              aria-labelledby={`service-title-${index}`}
            >
              <div className="relative mb-4 aspect-[1/1] overflow-hidden rounded-xl">
                <Image
                  src={service.image}
                  alt={`${service.title} illustration representing ${service.tag}`}
                  fill
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="object-cover"
                />
                <span className="absolute top-2 left-2 rounded-full bg-white px-3 py-1 text-xs font-medium text-[#004346] shadow-sm">
                  {service.tag}
                </span>
              </div>

              <h3
                id={`service-title-${index}`}
                className="mb-2 text-lg font-semibold text-gray-900"
              >
                {service.title}
              </h3>
              <p className="mb-4 text-sm text-gray-700">
                {service.description}
              </p>
              <Link
                href="#contact"
                aria-label={`Learn more about ${service.title}`}
                className="inline-block rounded-full bg-[#004346] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#09bc8a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004346] focus-visible:ring-offset-2"
              >
                Learn More
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
