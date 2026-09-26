import React from "react";

const WorkoutDetailsLoading = () => {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 bg-black">
      <span className="loading loading-spinner loading-lg text-[#ccff00]"></span>
      <p className="text-sm uppercase tracking-widest text-white/50">
        Loading workout details...
      </p>
    </div>
  );
};

export default WorkoutDetailsLoading;
