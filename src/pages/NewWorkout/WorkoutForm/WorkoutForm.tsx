import { useState, useRef, FormEvent } from "react";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
import { ExerciseData, SetData } from "../../../App";
import { NewWorkoutProps } from "../NewWorkout";
import DisplayExercise from "./DisplayExercise";
import Exercise from "./Exercise";

type AddData = {
  weight: string;
  reps: number;
};

export type SetFunctions = {
  addSet: any;
  removeSet: any;
};

export type EditSetFunctions = {
  updateSet: any;
  removeSet: any;
  index: number;
} & SetData;

const WorkoutForm = ({ addWorkout }: NewWorkoutProps) => {
  const [exercises, setExercises] = useState<ExerciseData[]>([]);
  const [set, setSet] = useState<SetData[]>([]);
  const workoutRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const addExercise = (exercise: string) => {
    console.log("exercise added " + exercise);
    if (exercise && set.length > 0) {
      setExercises((prevExercises: any) => {
        return [
          ...prevExercises,
          {
            id: uuidV4(),
            exercise: exercise,
            set,
          },
        ];
      });
      setSet([]);
    }
  };

  // Used for set data within an exercise

  const addSet = ({ weight, reps }: AddData) => {
    setSet((prevSet) => {
      return [...prevSet, { id: uuidV4(), weight, reps }];
    });
  };

  const removeSet = (id: string) => {
    setSet((prevSet) => {
      return prevSet.filter((set) => set.id !== id);
    });
  };

  const updateSet = ({ id, reps, weight }: SetData) => {
    setSet((prevSet) => {
      return prevSet.map((set) => {
        if (set.id === id) {
          return { id, reps, weight };
        }
        return set;
      });
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    addWorkout({
      workout: workoutRef.current!.value,
      date: dateRef.current!.value,
      exercise: "Bob",
      sets: set,
    });

    navigate("..");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={4}>
        <Row>
          <Col>
            <Form.Group controlId="workout">
              <Form.Label>Workout</Form.Label>
              <Form.Control type="text" required ref={workoutRef} />
            </Form.Group>
          </Col>
          <Col xs="auto">
            <Form.Group controlId="date">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" required ref={dateRef} />
            </Form.Group>
          </Col>
        </Row>

        {exercises.map((exercise) => (
          <DisplayExercise key={exercise.id} exercise={exercise} />
        ))}

        <Exercise
          set={set}
          removeSet={removeSet}
          updateSet={updateSet}
          addSet={addSet}
          addExercise={addExercise}
        />

        <Stack direction="horizontal" gap={3} className="justify-content-end">
          <Button variant="primary" type="submit">
            Save
          </Button>
          <Link to="..">
            <Button variant="danger" type="button">
              Cancel
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Form>
  );
};

export default WorkoutForm;

/*

  - Create an addExercise function 
        - adds sets and sets as empty array







  3) Need button to add a new exercise or to delete an exercise
          Put add button on bottom right and x next to the exercise
          Could also add a refresh button to set exercise blank 
  4) Could also add a way to minimize the exercise

*/
