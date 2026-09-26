"use client";

import { IWorkout } from "@/types/workout.type";
import { useMemo, useState } from "react";
import WorkoutCard from "../shared/WorkoutCard";

type SortOption = "duration" | "calories" | "rating";

interface ILibraryGridProps {
  workouts: IWorkout[];
}

const LibraryGrid = ({ workouts }: ILibraryGridProps) => {
  const [sortBy, setSortBy] = useState<SortOption>("duration");

  const sortedWorkouts = useMemo(() => {
    const sorted = [...workouts];

    if (sortBy === "duration") {
      sorted.sort((a, b) => a.duration - b.duration);
    } else if (sortBy === "calories") {
      sorted.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    } else if (sortBy === "rating") {
      sorted.sort((a, b) => b.rating - a.rating);
    }

    return sorted;
  }, [workouts, sortBy]);

  return (
    <div>
      {/* Sort dropdown */}
      <div className="mb-6 flex justify-end">
        <label className="flex items-center gap-2 text-sm text-white/60">
          Sort By
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="select select-bordered select-sm border-white/20 bg-zinc-900 text-white"
          >
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </label>
      </div>

      {/* Workouts Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sortedWorkouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </div>
  );
};

export default LibraryGrid;
