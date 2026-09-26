"use client";

import { IWorkout } from "@/types/workout.type";
import React, { createContext, ReactNode, useEffect, useState } from "react";

interface IWorkoutsContext {
  plan: IWorkout[];
  setPlan: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  saved: IWorkout[];
  setSaved: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  isLoaded: boolean;
}

export const WorkoutsContext = createContext<IWorkoutsContext>({
  plan: [],
  setPlan: () => {},
  saved: [],
  setSaved: () => {},
  isLoaded: false,
});

const PLAN_STORAGE_KEY = "fitlog-plan";
const SAVED_STORAGE_KEY = "fitlog-saved";

const WorkoutsProvider = ({ children }: { children: ReactNode }) => {
  const [plan, setPlan] = useState<IWorkout[]>([]);
  const [saved, setSaved] = useState<IWorkout[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const storedPlan = localStorage.getItem(PLAN_STORAGE_KEY);
      const storedSaved = localStorage.getItem(SAVED_STORAGE_KEY);

      if (storedPlan) setPlan(JSON.parse(storedPlan));
      if (storedSaved) setSaved(JSON.parse(storedSaved));
    } catch (error) {
      console.error("Error reading persisted workouts data:", error);
    }

    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    try {
      localStorage.setItem(PLAN_STORAGE_KEY, JSON.stringify(plan));
    } catch (error) {
      console.error("Error persisting plan data:", error);
    }
  }, [plan, isLoaded]);

  useEffect(() => {
    if (!isLoaded) return;

    try {
      localStorage.setItem(SAVED_STORAGE_KEY, JSON.stringify(saved));
    } catch (error) {
      console.error("Error persisting saved data:", error);
    }
  }, [saved, isLoaded]);

  const sharedData = {
    plan,
    setPlan,
    saved,
    setSaved,
    isLoaded,
  };

  return (
    <WorkoutsContext.Provider value={sharedData}>
      {children}
    </WorkoutsContext.Provider>
  );
};

export default WorkoutsProvider;
