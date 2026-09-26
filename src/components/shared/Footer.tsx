import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="FitLog Logo" className="h-6 w-6" />
          <span className="font-display text-lg font-bold tracking-wide text-white">
            FIT<span className="text-[#ccff00]">LOG</span>
          </span>
        </Link>

        <p className="text-center text-sm text-white/50 sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
