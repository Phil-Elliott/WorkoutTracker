import "bootstrap/dist/css/bootstrap.min.css";
import { useLocalStorage } from "./hooks/UseLocalStorage";
import { Container } from "react-bootstrap";
import { Navigate, Route, Routes } from "react-router-dom";
import NewWorkout from "./pages/NewWorkout/NewWorkout";
import { WorkoutLayout, EditWorkout, Workout } from "./pages/Workout";
import Workouts from "./pages/Home/Workouts";
import { v4 as uuidV4 } from "uuid";
import { PreWorkoutInfo, WorkoutInfo } from "./Interfaces";

function App() {
  const [workouts, setWorkouts] = useLocalStorage<WorkoutInfo[]>(
    "WORKOUTS",
    []
  );

  // Adds a workout to the workouts array (NewWorkout component)
  const addWorkout = ({ workout, date, exercise, sets }: PreWorkoutInfo) => {
    setWorkouts((prevWorkouts) => {
      return [...prevWorkouts, { id: uuidV4(), workout, date, exercise, sets }];
    });
  };

  // Deletes a workout from the workouts array (NewWorkout component)
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
