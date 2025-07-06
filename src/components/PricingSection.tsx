"use client";

import { CheckCircle2 } from "lucide-react";

export default function PricingSection() {
  return (
    <section
      className="bg-white py-20"
      id="pricing"
      role="region"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2
          id="pricing-heading"
          className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl"
        >
          Session Fees
        </h2>
        <p className="mb-10 text-lg text-gray-800">
          Choose the type of session that suits your needs — each designed with
          compassionate care.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <article
            className="rounded-xl border border-[#004346] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            aria-labelledby="individual-heading"
          >
            <h3
              id="individual-heading"
              className="mb-4 text-xl font-semibold text-[#004346]"
            >
              Individual Session
            </h3>
            <p className="mb-2 text-4xl font-bold text-[#234245]">$200</p>
            <p className="mb-4 text-sm text-gray-700">Per 50-minute session</p>
            <ul className="mb-6 flex flex-col items-start gap-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#09bc8a]" />
                One-on-one with Dr. Blake
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#09bc8a]" />
                Tailored treatment plan
              </li>
            </ul>
            <a
              href="#contact"
              aria-label="Book an individual therapy session"
              className="block w-full rounded-lg border border-[#004346] px-6 py-2 text-center font-medium text-[#004346] transition hover:bg-[#004346] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004346] focus-visible:ring-offset-2"
            >
              Book Individual Session
            </a>
          </article>

          <article
            className="rounded-xl border border-[#004346] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            aria-labelledby="couples-heading"
          >
            <h3
              id="couples-heading"
              className="mb-4 text-xl font-semibold text-[#004346]"
            >
              Couples Session
            </h3>
            <p className="mb-2 text-4xl font-bold text-[#234245]">$240</p>
            <p className="mb-4 text-sm text-gray-700">Per 60-minute session</p>
            <ul className="mb-6 flex flex-col items-start gap-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#09bc8a]" />
                Support for both partners
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#09bc8a]" />
                Conflict resolution & communication
              </li>
            </ul>
            <a
              href="#contact"
              aria-label="Book a couples therapy session"
              className="block w-full rounded-lg bg-[#234245] px-6 py-2 text-center font-medium text-white transition hover:bg-[#1b3435] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#234245] focus-visible:ring-offset-2"
            >
              Book Couples Session
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
