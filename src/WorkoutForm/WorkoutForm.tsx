import { useState, useRef, FormEvent } from "react";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
import { SetData } from "../App";
import { NewWorkoutProps } from "../NewWorkout";
import EditSetInfo from "./EditSetInfo";
import SetInfo from "./SetInfo";

type AddData = {
  weight: string;
  reps: number;
};

export type SetFunctions = {
  addSet: any;
  removeSet: (id: string) => void;
};

export type EditSetFunctions = {
  updateSet: any;
  removeSet: (id: string) => void;
  index: number;
} & SetData;

const WorkoutForm = ({ addWorkout }: NewWorkoutProps) => {
  const [set, setSet] = useState<SetData[]>([]);
  const workoutRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const exerciseRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

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
      exercise: exerciseRef.current!.value,
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

        <Form.Group controlId="exercise">
          <Form.Label>Exercise</Form.Label>
          <Form.Control type="text" required ref={exerciseRef} />
        </Form.Group>

        {set.map((set, index) => (
          <EditSetInfo
            key={set.id}
            index={index}
            id={set.id}
            weight={set.weight}
            reps={set.reps}
            removeSet={removeSet}
            updateSet={updateSet}
          />
        ))}

        <SetInfo removeSet={removeSet} addSet={addSet} length={set.length} />

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

have a submit handler 
make a data state on main page
have state get added to that when submitted


{
  workout: "string",
  date: "string",
  exercise: "string",
  sets: [
    {
      id: "string",
      weight: "string",
      reps: "number"
    }
  ]
}

*/
