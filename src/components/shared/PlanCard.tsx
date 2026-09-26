import { IWorkout } from "@/types/workout.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IPlanCardProps {
  workout: IWorkout;
  onMarkAsDone?: () => void;
  onRemove: () => void;
}

const PlanCard = ({ workout, onMarkAsDone, onRemove }: IPlanCardProps) => {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-zinc-900 p-4 sm:flex-row sm:items-center">
      {/* Thumbnail */}
      <div className="relative h-24 w-full shrink-0 overflow-hidden rounded-xl bg-zinc-800 sm:w-24">
        <Image
          src={workout.image}
          alt={workout.name}
          width={150}
          height={150}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Details */}
      <div className="flex-1">
        <h3 className="font-display text-lg font-bold uppercase text-white">
          {workout.name}
        </h3>
        <p className="text-sm text-white/50">{workout.equipment}</p>

        <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-white/60">
          <span>⏱ {workout.duration} min</span>
          <span>🔥 {workout.caloriesBurned} kcal</span>
          <span>⭐ {workout.rating}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-2">
        <Link
          href={`/workouts/${workout.id}`}
          className="btn btn-sm rounded-full border border-white/30 bg-transparent text-white hover:bg-white/10"
        >
          View Details
        </Link>

        {onMarkAsDone && (
          <button
            onClick={onMarkAsDone}
            className="btn btn-sm rounded-full border-0 bg-[#ccff00] text-black hover:bg-[#b8e600]"
          >
            ✓ Mark as Done
          </button>
        )}

        <button
          onClick={onRemove}
          aria-label="Remove"
          className="btn btn-sm btn-square rounded-full border border-white/30 bg-transparent text-white hover:bg-white/10"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default PlanCard;
