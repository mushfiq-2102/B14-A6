"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext } from "react";
import logo from "@/assets/logo.png";
import { WorkoutsContext } from "@/context/WorkoutsContext";

const navLinks = [
  { href: "/", label: "Workout" },
  { href: "/my-plan", label: "My Plan" },
];

const Navbar = () => {
  const pathname = usePathname();
  const { plan, saved } = useContext(WorkoutsContext);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black">
      <div className="navbar container mx-auto px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content z-1 mt-3 w-52 rounded-box bg-zinc-900 p-2 shadow"
            >
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Link href="/" className="flex items-center gap-2">
            <Image src={logo} alt="FitLog Logo" className="h-7 w-7" />
            <span className="font-display text-xl font-bold tracking-wide text-white">
              FIT<span className="text-[#ccff00]">LOG</span>
            </span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`rounded-full px-4 text-sm font-semibold uppercase tracking-wide ${
                      isActive
                        ? "bg-[#ccff00] text-black hover:bg-[#ccff00]"
                        : "text-white/70 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="navbar-end gap-2">
          <Link
            href="/my-plan"
            className="rounded-full bg-[#ccff00] px-4 py-1.5 text-sm font-bold text-black transition hover:bg-[#b8e600]"
          >
            Plan {plan.length}
          </Link>
          <Link
            href="/my-plan"
            className="rounded-full border border-white/30 px-4 py-1.5 text-sm font-bold text-white transition hover:border-white"
          >
            Saved {saved.length}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
