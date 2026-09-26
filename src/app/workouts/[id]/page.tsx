import AddToPlanButton from "@/components/workoutDetails/AddToPlanButton";
import SaveButton from "@/components/workoutDetails/SaveButton";
import { IWorkout } from "@/types/workout.type";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

interface IWorkoutDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getWorkouts = async () => {
  try {
    const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching workouts data:", error);
    return [];
  }
};

const Spec = ({ label, value }: { label: string; value: string }) => (
  <div>
    <p className="text-xs uppercase tracking-wide text-white/40">{label}</p>
    <p className="mt-1 font-bold text-white">{value}</p>
  </div>
);

const WorkoutDetailsPage = async ({ params }: IWorkoutDetailsPageProps) => {
  const { id } = await params;
  const workoutsData = await getWorkouts();
  const workout = workoutsData.find(
    (workout: IWorkout) => String(workout.id) === String(id),
  ) as IWorkout;

  if (!workout) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid gap-8 overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 p-6 lg:grid-cols-2 lg:p-10">
        {/* Left Side - Visual/Media */}
        <div className="relative overflow-hidden rounded-2xl bg-zinc-800">
          <Image
            src={workout.image}
            alt={workout.name}
            width={600}
            height={700}
            className="h-full min-h-[350px] w-full object-cover lg:min-h-[550px]"
          />
        </div>

        {/* Right Side - Details */}
        <div className="flex flex-col justify-center">
          {/* Category tags */}
          <div className="flex flex-wrap gap-2">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="rounded-full bg-[#ccff00]/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#ccff00]"
              >
                {group}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="font-display mt-4 text-3xl font-bold uppercase leading-tight text-white md:text-4xl">
            {workout.name}
          </h1>

          {/* Description */}
          <p className="mt-3 leading-7 text-white/60">{workout.description}</p>

          {/* Key Specs */}
          <div className="my-6 grid grid-cols-2 gap-4 rounded-2xl bg-black/40 p-5 sm:grid-cols-4">
            <Spec label="Equipment" value={workout.equipment} />
            <Spec label="Difficulty" value={workout.difficulty} />
            <Spec label="Sets" value={String(workout.sets)} />
            <Spec label="Reps" value={workout.reps} />
            <Spec label="Duration" value={`${workout.duration} min`} />
            <Spec label="Calories" value={`${workout.caloriesBurned} kcal`} />
            <Spec label="Rating" value={`⭐ ${workout.rating}`} />
          </div>

          {/* Instructions */}
          <div>
            <h3 className="font-display mb-3 text-lg font-bold uppercase tracking-wide text-white">
              Instructions
            </h3>

            <ol className="space-y-3">
              {workout.instructions.map((step, index) => (
                <li key={index} className="flex gap-3 text-white/70">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ccff00] text-xs font-bold text-black">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap gap-3">
            <AddToPlanButton workout={workout} />
            <SaveButton workout={workout} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailsPage;
