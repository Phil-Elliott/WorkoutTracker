import React, { useRef } from "react";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { EditSetInfo, SetInfo } from "..";
import { SetData } from "../../../../Interfaces";
import { SetFunctions } from "../WorkoutForm";

type ExerciseProps = {
  updateSet: (data: SetData) => void;
  set: SetData[];
  addExercise: (exercise: string) => void;
} & SetFunctions;

const Exercise = ({
  removeSet,
  updateSet,
  set,
  addSet,
  addExercise,
}: ExerciseProps) => {
  const exerciseRef = useRef<HTMLInputElement>(null);

  const handleAddExercise = () => {
    if (exerciseRef.current) {
      addExercise(exerciseRef.current.value);
      exerciseRef.current.value = "";
    }
  };

  return (
    <Stack gap={3}>
      <Row className="align-items-end mb-4">
        <Col>
          <Form.Group controlId="exercise">
            <Form.Label>Exercise</Form.Label>
            <Form.Control type="text" required ref={exerciseRef} />
          </Form.Group>
        </Col>
        <Col xs="auto">
          <Button variant="outline-primary" onClick={() => handleAddExercise()}>
            Add
          </Button>
        </Col>
      </Row>

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
    </Stack>
  );
};

export default Exercise;
