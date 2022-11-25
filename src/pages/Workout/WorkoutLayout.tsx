import {
  Navigate,
  Outlet,
  useOutletContext,
  useParams,
} from "react-router-dom";
import { WorkoutInfo } from "../../Interfaces";

type WorkoutLayoutProps = {
  workouts: WorkoutInfo[];
};

export const WorkoutLayout = ({ workouts }: WorkoutLayoutProps) => {
  const { id } = useParams();
  const workout = workouts.find((workout: any) => workout.id === id);

  if (workout == null) return <Navigate to="/" replace />;

  return <Outlet context={workout} />;
};

export const useWorkout = () => {
  return useOutletContext<WorkoutInfo>();
};
