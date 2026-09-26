import { IWorkout } from "@/types/workout.type";
import LibraryGrid from "./LibraryGrid";

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

const Library = async () => {
  const workoutsData: IWorkout[] = await getWorkouts();

  return (
    <section id="library" className="container mx-auto my-[70px] px-4">
      {/* Section Heading */}
      <div className="mb-10 text-center">
        <h2 className="font-display text-3xl font-bold uppercase text-white md:text-4xl">
          The Library
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-white/50">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <LibraryGrid workouts={workoutsData} />
    </section>
  );
};

export default Library;
