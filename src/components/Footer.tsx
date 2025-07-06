"use client";

import { navLinks } from "@/constants/nav-links";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-[#004346] px-6 py-10 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-3">
        <div>
          <h3 className="mb-2 text-xl font-bold">Dr. Serena Blake</h3>
          <p className="text-sm text-gray-200">
            Licensed Clinical Psychologist (PsyD)
          </p>
          <p className="mt-2 text-sm text-gray-400">
            Empowering individuals and couples through evidence-based therapy.
          </p>
        </div>

        <div>
          <h4 className="mb-2 text-lg font-semibold">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-200">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-2 text-lg font-semibold">Contact</h4>
          <p className="flex items-center gap-2 text-sm text-gray-200">
            <FaPhoneAlt className="text-[#c6e6ea]" /> (323) 555-0192
          </p>
          <p className="mt-1 flex items-center gap-2 text-sm text-gray-200">
            <FaMapMarkerAlt className="text-[#c6e6ea]" />
            1287 Maplewood Drive, Los Angeles, CA 90026
          </p>
          <p className="mt-1 flex items-center gap-2 text-sm text-gray-200">
            <MdEmail className="text-[#c6e6ea]" />
            serena@blakepsychology.com
          </p>

          <div className="mt-4 flex gap-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <FaFacebook className="h-5 w-5" />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <FaInstagram className="h-5 w-5" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <FaLinkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col items-center justify-between gap-2 border-t border-gray-700 px-6 pt-4 text-center text-sm text-gray-400 md:flex-row">
        <span>
          © {new Date().getFullYear()} Dr. Serena Blake. All rights reserved.
        </span>
        <div className="space-x-4">
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="hover:underline">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
