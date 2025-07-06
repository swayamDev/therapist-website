"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "../constants/nav-links";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-transparent shadow-sm backdrop-blur-md"
            : "bg-neutral-50"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Image
            src="/logo.png"
            alt="Logo"
            width={48}
            height={48}
            className="object-contain"
          />

          <nav className="hidden space-x-12 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-lg font-medium text-[#004346] transition hover:text-[#09bc8a]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <Link
            href="#contact"
            className="hidden rounded-md bg-[#004346] px-5 py-2 font-medium text-white transition hover:bg-[#09bc8a] lg:inline-block"
          >
            Make Appointment
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative z-[60] flex flex-col space-y-1 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span
              className={`block h-0.5 w-6 bg-[#004346] transition-transform duration-300 ${
                isMenuOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#004346] transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#004346] transition-transform duration-300 ${
                isMenuOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
            className="fixed top-0 right-0 z-50 h-full w-80 bg-white shadow-2xl lg:hidden"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between border-b p-6">
              <h2 className="text-2xl font-semibold text-[#004346]">
                Dr. Serena Blake
              </h2>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="rounded-md p-2 transition-colors hover:bg-gray-100"
                aria-label="Close menu"
              >
                <X className="h-6 w-6 text-[#004346]" />
              </button>
            </div>

            <nav className="flex flex-col space-y-6 p-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="border-b border-gray-100 py-2 text-lg font-medium text-[#004346] transition hover:border-[#09bc8a] hover:text-[#09bc8a]"
                >
                  {link.label}
                </a>
              ))}

              <Link
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-6 inline-block w-full rounded-md bg-[#004346] px-6 py-3 text-center font-medium text-white transition hover:bg-[#09bc8a]"
              >
                Make Appointment
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
