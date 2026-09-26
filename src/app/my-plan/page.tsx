"use client";

import PlanCard from "@/components/shared/PlanCard";
import { WorkoutsContext } from "@/context/WorkoutsContext";
import { IWorkout } from "@/types/workout.type";
import Link from "next/link";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const Metric = ({ label, value }: { label: string; value: number }) => (
  <div className="rounded-2xl border border-white/10 bg-zinc-900 py-6 text-center">
    <p className="text-3xl font-bold text-[#ccff00]">{value}</p>
    <p className="mt-1 text-sm uppercase tracking-wide text-white/50">
      {label}
    </p>
  </div>
);

const EmptyState = () => (
  <div className="flex flex-col items-center gap-3 py-10 text-center">
    <h3 className="font-display text-2xl font-bold uppercase text-white">
      Nothing Here Yet
    </h3>
    <p className="text-white/50">
      Browse the library and add a lift to get today moving.
    </p>
    <Link
      href="/"
      className="btn mt-2 rounded-full border-0 bg-[#ccff00] text-black hover:bg-[#b8e600]"
    >
      Go to workouts
    </Link>
  </div>
);

const MyPlan = () => {
  const { plan, setPlan, saved, setSaved, isLoaded } =
    useContext(WorkoutsContext);

  const handleMarkAsDone = (workout: IWorkout) => {
    setPlan(plan.filter((item) => item.id !== workout.id));
    toast.success(`Marked "${workout.name}" as done!`);
  };

  const handleRemoveFromPlan = (workout: IWorkout) => {
    setPlan(plan.filter((item) => item.id !== workout.id));
    toast.info(`Removed "${workout.name}" from today's plan`);
  };

  const handleRemoveFromSaved = (workout: IWorkout) => {
    setSaved(saved.filter((item) => item.id !== workout.id));
    toast.info(`Removed "${workout.name}" from saved`);
  };

  const totalMinutes = plan.reduce((sum, item) => sum + item.duration, 0);
  const totalCalories = plan.reduce(
    (sum, item) => sum + item.caloriesBurned,
    0,
  );

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Heading */}
      <div className="text-center">
        <h1 className="font-display text-4xl font-bold uppercase text-white md:text-5xl">
          My Plan
        </h1>
        <p className="mt-3 text-white/50">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* Metrics Summary */}
      <div className="my-8 grid grid-cols-3 gap-4">
        <Metric label="Exercises" value={plan.length} />
        <Metric label="Minutes" value={totalMinutes} />
        <Metric label="Calories" value={totalCalories} />
      </div>

      {/* Tabs */}
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_plan_tabs"
          className="tab"
          aria-label={`Today's Plan (${plan.length})`}
          defaultChecked
        />
        <div className="tab-content space-y-4 border-base-300 bg-base-100 p-6">
          {!isLoaded ? (
            <p className="text-center text-white/50">Loading workouts…</p>
          ) : plan.length > 0 ? (
            plan.map((workout) => (
              <PlanCard
                key={workout.id}
                workout={workout}
                onMarkAsDone={() => handleMarkAsDone(workout)}
                onRemove={() => handleRemoveFromPlan(workout)}
              />
            ))
          ) : (
            <EmptyState />
          )}
        </div>

        <input
          type="radio"
          name="my_plan_tabs"
          className="tab"
          aria-label={`Saved (${saved.length})`}
        />
        <div className="tab-content space-y-4 border-base-300 bg-base-100 p-6">
          {!isLoaded ? (
            <p className="text-center text-white/50">Loading workouts…</p>
          ) : saved.length > 0 ? (
            saved.map((workout) => (
              <PlanCard
                key={workout.id}
                workout={workout}
                onRemove={() => handleRemoveFromSaved(workout)}
              />
            ))
          ) : (
            <EmptyState />
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPlan;
