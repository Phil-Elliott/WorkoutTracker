import React from "react";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { ExerciseData } from "../../../App";

const DisplayExercise = ({ exercise }: any) => {
  console.log(exercise);

  const handleEditExercise = () => {
    console.log("edit exercise");
  };

  return (
    <Stack gap={3}>
      <Row className="align-items-end mb-4">
        <Col>
          <Form.Group controlId="exercise">
            <Form.Label>Exercise</Form.Label>
            <Form.Control
              type="text"
              required
              value={exercise.exercise}
              defaultValue=""
            />
          </Form.Group>
        </Col>
        <Col xs="auto">
          <Button
            variant="outline-primary"
            onClick={() => handleEditExercise()}
          >
            Edit
          </Button>
        </Col>
      </Row>

      {/* {exercise.set.map((set, index) => (
        <EditSetInfo
          key={set.id}
          index={index}
          id={set.id}
          weight={set.weight}
          reps={set.reps}
          removeSet={removeSet}
          updateSet={updateSet}
        />
      ))} */}
    </Stack>
  );
};

export default DisplayExercise;
