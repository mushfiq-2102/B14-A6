"use client";
import { WorkoutsContext } from "@/context/WorkoutsContext";
import { IWorkout } from "@/types/workout.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const SaveButton = ({ workout }: { workout: IWorkout }) => {
  const { saved, setSaved } = useContext(WorkoutsContext);

  const handleSaveForLater = () => {
    console.log("save for later btn triggered", workout);

    setSaved([...saved, workout]);
    toast.success(`Saved "${workout.name}" for later`);
  };

  return (
    <button
      className="btn flex-1 gap-2 rounded-full border border-white/30 bg-transparent text-white hover:border-white hover:bg-white/10"
      onClick={() => handleSaveForLater()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-4-7 4V5z"
        />
      </svg>
      Save for later
    </button>
  );
};

export default SaveButton;
