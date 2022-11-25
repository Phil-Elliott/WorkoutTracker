import {
  Navigate,
  Outlet,
  useOutletContext,
  useParams,
} from "react-router-dom";
import { WorkoutInfo } from "../../App";

export const WorkoutLayout = ({ workouts }: any) => {
  const { id } = useParams();
  const workout = workouts.find((workout: any) => workout.id === id);

  if (workout == null) return <Navigate to="/" replace />;

  return <Outlet context={workout} />;
};

export const useWorkout = () => {
  return useOutletContext<WorkoutInfo>();
};

// type NoteLayoutProps = {
//   notes: Note[];
// };

// export function NoteLayout({ notes }: NoteLayoutProps) {
//   const { id } = useParams();
//   const note = notes.find((note) => note.id === id);

//   if (note == null) return <Navigate to="/" replace />;

//   return <Outlet context={note} />;
// }

// export function useNote() {
//   return useOutletContext<Note>();
// }
