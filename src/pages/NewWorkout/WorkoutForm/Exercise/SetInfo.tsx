import React, { useRef } from "react";
import { Button, Col, Form, Stack } from "react-bootstrap";
import { SetFunctions } from "../WorkoutForm";

type SetInfoProps = {
  length: number;
} & SetFunctions;

const SetInfo = ({ addSet, removeSet, length }: SetInfoProps) => {
  const weightRef = useRef<HTMLInputElement>(null);
  const repsRef = useRef<HTMLInputElement>(null);

  const addData = () => {
    const weight = weightRef.current?.value;
    const reps = Number(repsRef.current?.value);

    if (weight && reps) {
      addSet({
        weight,
        reps,
      });
    }

    weightRef.current!.value = "";
    repsRef.current!.value = "";
  };

  return (
    <Stack direction="horizontal" gap={5} className="align-items-end mb-4">
      <Col xs="auto">
        <p>{length + 1}</p>
      </Col>
      <Col>
        <Form.Group controlId="weight">
          <Form.Label>Weight</Form.Label>
          <Form.Control ref={weightRef} type="text" />
        </Form.Group>
      </Col>
      <Col>
        <Form.Group controlId="reps">
          <Form.Label>Reps</Form.Label>
          <Form.Control ref={repsRef} type="number" />
        </Form.Group>
      </Col>
      <Col xs="auto">
        <Stack direction="horizontal" gap={3}>
          <Button variant="outline-primary" onClick={() => addData()}>
            Add
          </Button>
        </Stack>
      </Col>
    </Stack>
  );
};

export default SetInfo;
