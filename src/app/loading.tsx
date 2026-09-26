import React from "react";

const GlobalLoading = () => {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 bg-black">
      <span className="loading loading-spinner loading-lg text-[#ccff00]"></span>
      <p className="text-sm uppercase tracking-widest text-white/50">
        Loading workouts...
      </p>
    </div>
  );
};

export default GlobalLoading;
