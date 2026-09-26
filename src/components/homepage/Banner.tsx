import Image from "next/image";
import React from "react";
import bannerImg from "@/assets/banner-img.png";

const Banner = () => {
  return (
    <section className="bg-black px-4 py-14 md:py-20">
      <div className="container mx-auto grid items-center gap-10 md:grid-cols-2">
        {/* Content */}
        <div className="space-y-6 text-center md:text-left">
          <span className="inline-block rounded-full border border-[#ccff00]/40 bg-[#ccff00]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#ccff00]">
            Workout Library
          </span>

          <h1 className="font-display text-4xl font-bold uppercase leading-tight text-white md:text-5xl lg:text-6xl">
            Train with intent.
            <span className="block text-[#ccff00]">Log every set.</span>
          </h1>

          <p className="mx-auto max-w-lg text-base leading-7 text-white/60 md:mx-0 md:text-lg">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <div className="flex justify-center md:justify-start">
            <a
              href="#library"
              className="btn gap-2 rounded-full border-0 bg-[#ccff00] px-7 text-black hover:bg-[#b8e600]"
            >
              Browse Workouts
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="relative flex justify-center">
          <div className="absolute h-64 w-64 rounded-full bg-[#ccff00]/10 blur-3xl"></div>

          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src={bannerImg}
              alt="Workout illustration"
              priority
              className="h-auto w-full max-w-sm object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
