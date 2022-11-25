export type ExerciseData = {
  id: string;
  exercise: string;
  set: SetData[];
};

export type WorkoutInfo = {
  id: string;
} & PreWorkoutInfo;

export type PreWorkoutInfo = {
  workout: string;
  date: string;
  exercise: string;
  sets: SetData[];
};

export type SetData = {
  id: string;
  weight: string;
  reps: number;
};
