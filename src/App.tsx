import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useLocalStorage } from "./UseLocalStorage";
import { Container } from "react-bootstrap";
import { Navigate, Route, Routes } from "react-router-dom";
import EditWorkout from "./EditWorkout";
import NewWorkout from "./NewWorkout";
import Workout from "./Workout";
import { WorkoutLayout } from "./WorkoutLayout";
import Workouts from "./Workouts";
import { v4 as uuidV4 } from "uuid";

export type WorkoutInfo = {
  id: string;
  workout: string;
  date: string;
  exercise: string;
  sets: SetData[];
};

export type WorkoutInfo2 = {
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

function App() {
  const [workouts, setWorkouts] = useLocalStorage<WorkoutInfo[]>(
    "WORKOUTS",
    []
  );

  const addWorkout = ({ workout, date, exercise, sets }: WorkoutInfo2) => {
    setWorkouts((prevWorkouts) => {
      return [...prevWorkouts, { id: uuidV4(), workout, date, exercise, sets }];
    });
  };

  const deleteWorkout = (id: string) => {
    setWorkouts((prevWorkouts) => {
      return prevWorkouts.filter((workout) => workout.id !== id);
    });
  };

  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<Workouts workouts={workouts} />} />
        <Route path="/new" element={<NewWorkout addWorkout={addWorkout} />} />
        <Route path="/:id" element={<WorkoutLayout workouts={workouts} />}>
          <Route index element={<Workout deleteWorkout={deleteWorkout} />} />
          <Route path="edit" element={<EditWorkout />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
}

export default App;
