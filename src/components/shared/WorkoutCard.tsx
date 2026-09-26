import { IWorkout } from "@/types/workout.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IWorkoutCardProps {
  workout: IWorkout;
}

const WorkoutCard = ({ workout }: IWorkoutCardProps) => {
  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 transition-all duration-300 hover:-translate-y-1 hover:border-[#ccff00]/50"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-zinc-800">
        <Image
          src={workout.image}
          alt={workout.name}
          width={500}
          height={400}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        {/* Category tags */}
        <div className="mb-3 flex flex-wrap gap-2">
          {workout.muscleGroups.map((group) => (
            <span
              key={group}
              className="rounded-full bg-[#ccff00]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[#ccff00]"
            >
              {group}
            </span>
          ))}
        </div>

        {/* Name */}
        <h3 className="font-display line-clamp-1 text-lg font-bold uppercase text-white transition-colors group-hover:text-[#ccff00]">
          {workout.name}
        </h3>

        {/* Equipment */}
        <p className="mt-1 text-sm text-white/50">{workout.equipment}</p>

        {/* Stats row */}
        <div className="mt-4 flex items-center gap-4 border-t border-white/10 pt-4 text-sm text-white/60">
          <span>⏱ {workout.duration} min</span>
          <span>🔥 {workout.caloriesBurned} kcal</span>
          <span>⭐ {workout.rating}</span>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
