"use client";
import { Phone, MapPin } from "lucide-react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="relative z-30 w-full border-b border-[#234245] bg-gradient-to-b from-[#f0f3bd] to-[#f8ffe5] py-2 text-sm font-medium text-[#234245]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-6 sm:flex-row sm:justify-between sm:gap-4">
        <Link
          href="tel:+13235550192"
          className="flex items-center gap-2 hover:underline"
        >
          <Phone className="h-4 w-4 text-[#234245]" />
          (323) 555-0192
        </Link>

        <Link
          href="https://maps.app.goo.gl/rGmzJUkGp2ENiKyt7"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline"
        >
          <MapPin className="h-4 w-4 text-[#234245]" />
          <span className="max-w-[240px] truncate sm:max-w-none">
            1287 Maplewood Drive, Los Angeles, CA 90026
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
