import { Sparkles } from "lucide-react";
import Link from "next/link";

export default function ScheduleConsultation() {
  return (
    <section className="bg-[#004346] py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl leading-tight font-bold md:text-4xl">
              Schedule A Consultation
            </h2>
          </div>

          <div className="max-w-xl text-center lg:text-left">
            <p className="text-xl leading-relaxed font-medium text-white/90">
              Dr. Serena Blake is currently accepting new clients. Available for
              online and in-person sessions.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white px-8 py-4 text-lg font-medium text-white transition-all duration-200 hover:bg-white hover:text-[#004346] hover:shadow-lg"
            >
              <Sparkles className="size-6" />
              Start Healing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
