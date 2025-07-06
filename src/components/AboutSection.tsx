"use client";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-[#c0e6ea] py-24"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
        <figure className="relative mx-auto max-w-sm lg:max-w-lg">
          <div className="overflow-hidden rounded-xl border-4 border-white shadow-lg lg:rounded-xl lg:border-6">
            <Image
              src="/about.webp"
              alt="Dr. Serena Blake smiling warmly in a natural setting"
              width={400}
              height={500}
              className="h-auto w-full object-cover lg:h-[480px] lg:w-full"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>

          <figcaption className="absolute bottom-2 left-2 rounded-lg bg-white/90 px-4 py-2 text-sm shadow backdrop-blur-sm lg:bottom-3 lg:left-3 lg:px-5 lg:py-3 lg:text-base">
            <p className="font-semibold text-black lg:text-lg">
              Dr. Serena Blake
            </p>
            <p className="text-[13px] text-neutral-700 lg:text-sm">
              PsyD, Clinical Psychologist
            </p>
            <p className="mt-1 text-[12px] text-amber-600 lg:mt-1 lg:text-xs">
              ⭐ Trusted by 500+ Clients · 8+ Years Experience
            </p>
          </figcaption>
        </figure>

        <div className="lg:pl-4">
          <span className="mb-4 inline-block rounded-full bg-yellow-200 px-4 py-1 text-sm font-medium text-gray-800">
            About Dr. Serena Blake · Clinical Psychologist · Los Angeles
          </span>

          <h2
            id="about-heading"
            className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl lg:mb-6 lg:text-5xl"
          >
            Hi, I'm Dr. Serena Blake
          </h2>

          <p className="mb-4 leading-relaxed text-gray-700 lg:mb-6 lg:text-xl lg:leading-relaxed">
            With over <strong>8 years of dedicated experience</strong> and more
            than <strong>500 client sessions</strong>, I offer a{" "}
            <strong>compassionate</strong>,{" "}
            <strong>evidence-based approach</strong> to therapy. Whether you're{" "}
            <strong>managing anxiety</strong>,{" "}
            <strong>working through trauma</strong>, or{" "}
            <strong>improving relationships</strong>, my goal is to support your
            healing with <strong>warmth</strong>, <strong>trust</strong>, and{" "}
            <strong>proven psychological techniques</strong>.
          </p>

          <p className="mb-4 leading-relaxed text-gray-700 lg:mb-6 lg:text-xl lg:leading-relaxed">
            My therapeutic style blends{" "}
            <strong>Cognitive-Behavioral Therapy (CBT)</strong> with{" "}
            <strong>mindfulness</strong>, always centered on your{" "}
            <strong>personal growth</strong>. I believe therapy should be both{" "}
            <strong>grounding</strong> and <strong>empowering</strong>—equipping
            you with tools to navigate life's challenges with{" "}
            <strong>clarity</strong> and <strong>confidence</strong>.
          </p>

          <p className="leading-relaxed text-gray-700 lg:text-xl lg:leading-relaxed">
            Whether we meet in my <strong>cozy office</strong> on Maplewood
            Drive or <strong>virtually via Zoom</strong>, I strive to create a{" "}
            <strong>safe</strong>, <strong>supportive space</strong> for every
            client. Together, we can explore the{" "}
            <strong>root of your struggles</strong> and move toward a more{" "}
            <strong>peaceful</strong>, <strong>balanced life</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
