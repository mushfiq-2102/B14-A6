"use client";
import { WorkoutsContext } from "@/context/WorkoutsContext";
import { IWorkout } from "@/types/workout.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const PLAN_CAP = 5;

const AddToPlanButton = ({ workout }: { workout: IWorkout }) => {
  const { plan, setPlan } = useContext(WorkoutsContext);
  const isPlanFull = plan.length >= PLAN_CAP;

  const handleAddToPlan = () => {
    console.log("add to plan btn triggered", workout);

    setPlan([...plan, workout]);
    toast.success(`Added "${workout.name}" to today's plan`);
  };

  return (
    <button
      className="btn flex-1 gap-2 rounded-full border-0 bg-[#ccff00] text-black hover:bg-[#b8e600] disabled:border-0 disabled:bg-white/10 disabled:text-white/30"
      onClick={() => handleAddToPlan()}
      disabled={isPlanFull}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      </svg>
      {isPlanFull ? "Plan is full" : "Add to today's plan"}
    </button>
  );
};

export default AddToPlanButton;
