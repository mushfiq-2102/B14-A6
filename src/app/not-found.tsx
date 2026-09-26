import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <p className="font-display text-7xl font-bold text-[#ccff00]">404</p>

      <h1 className="font-display text-2xl font-bold uppercase text-white">
        Page not found
      </h1>

      <p className="max-w-md text-white/50">
        The page you&apos;re looking for doesn&apos;t exist or has been
        moved.
      </p>

      <Link
        href="/"
        className="btn mt-2 rounded-full border-0 bg-[#ccff00] text-black hover:bg-[#b8e600]"
      >
        Go to workouts
      </Link>
    </div>
  );
};

export default NotFound;
