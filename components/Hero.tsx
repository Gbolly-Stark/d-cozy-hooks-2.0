
"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { Aladin } from "next/font/google";

const aladin = Aladin({
  weight: "400",
  subsets: ["latin"],
});

const Hero = () => {
  const headRef = useRef<HTMLHeadingElement>(null);
  const parRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    gsap.from(headRef.current, {
      x: -100,
      opacity: 0,
      duration: 2,
      ease: "power3.out",
    });

    gsap.from(parRef.current, {
      y: 100,
      opacity: 0,
      delay: 1,
      duration: 2,
      ease: "power3.out",
    });
  });

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-black"
    >
      <img
        src="/Untitled (1).png"
        alt="Woman crocheting"
        className="absolute inset-0 h-full w-full object-cover object-[65%_center] sm:object-[60%_center] lg:object-center"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

      <div className="relative z-10 flex min-h-screen items-center">
        <div className="w-full px-6 sm:px-10 md:w-1/2 md:px-16 lg:px-20">

          <h1
            ref={headRef}
            className="font-heading mt-15 text-4xl font-serif leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Beautiful Crochet,
            <span className="block">
              Made With{" "}
            <span className={`${aladin.className} text-[#B026FF] text-6xl md:text-8xl drop-shadow-[0_0_20px_#B026FF]`}> 
                Love.
              </span>
            </span>
          </h1>

          <p
            ref={parRef}
            className="mt-6 max-w-lg text-sm leading-7 text-white/75 sm:text-base md:text-lg"
          >
            Discover beautiful handmade crochet pieces crafted with
            passion, creativity, and love.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 rounded-xl bg-[#B026FF] px-7 py-3.5 font-semibold text-white shadow-[0_0_20px_rgba(176,38,255,0.4)] transition duration-300 hover:scale-105 hover:bg-[#A020E8]"
            >
              Shop Collection

              <ArrowRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/about"
              className="rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition duration-300 hover:border-[#B026FF] hover:bg-[#B026FF]/20"
            >
              Explore More
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
