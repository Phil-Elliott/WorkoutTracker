import { PreWorkoutInfo } from "../../Interfaces";
import WorkoutForm from "./WorkoutForm/WorkoutForm";

export type NewWorkoutProps = {
  addWorkout: (data: PreWorkoutInfo) => void;
};

const NewWorkout = ({ addWorkout }: NewWorkoutProps) => {
  return (
    <>
      <h1>New Workout</h1>
      <WorkoutForm addWorkout={addWorkout} />
    </>
  );
};

export default NewWorkout;
