"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { FaLongArrowAltDown } from "react-icons/fa";

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="relative min-h-screen w-full"
      role="region"
      aria-label="Hero Section"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/home.webp"
          alt="Peaceful woman standing in nature with eyes closed, symbolizing calm and emotional healing"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-20 flex h-screen flex-col items-center justify-center px-4 text-center text-white sm:px-6 md:px-12">
        <motion.h1
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-4xl font-extrabold tracking-tight drop-shadow-md md:text-6xl"
        >
          Feel Heard. Heal Deeply.
        </motion.h1>
        <motion.p
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 max-w-2xl text-lg text-white/90 drop-shadow-sm md:text-xl"
        >
          Dr. Serena Blake, PsyD – Licensed Clinical Psychologist in Los Angeles
          helping individuals and couples find clarity, balance, and emotional
          healing.
        </motion.p>
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <button
            className="rounded-full bg-white px-6 py-3 font-semibold text-black shadow-md transition hover:bg-neutral-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            aria-label="Book a Free Consultation with Dr. Serena Blake"
          >
            Book a Free Consult
          </button>
        </motion.div>
        ={" "}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: -15 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          aria-hidden="true"
          className="absolute bottom-4 animate-bounce text-white"
        >
          <FaLongArrowAltDown className="size-5" />
        </motion.div>
      </div>
    </section>
  );
}
