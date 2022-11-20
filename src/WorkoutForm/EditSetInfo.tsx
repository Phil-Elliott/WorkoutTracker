import React, { useRef } from "react";
import { Button, Col, Form, Stack } from "react-bootstrap";
import { EditSetFunctions } from "./WorkoutForm";

const EditSetInfo = ({
  updateSet,
  removeSet,
  weight,
  id,
  reps,
  index,
}: EditSetFunctions) => {
  const weightRef = useRef<HTMLInputElement>(null);
  const repsRef = useRef<HTMLInputElement>(null);

  const editData = () => {
    const weightR = weightRef.current?.value;
    const repsR = repsRef.current?.value;

    if (weightR && repsR) {
      updateSet({
        id,
        weight: weightR,
        reps: parseInt(repsR),
      });
    }
  };

  return (
    <Stack direction="horizontal" gap={5} className="align-items-end mb-4">
      <Col xs="auto">
        <p>{index + 1}</p>
      </Col>
      <Col>
        <Form.Group controlId="weight">
          <Form.Label>Weight</Form.Label>
          <Form.Control
            ref={weightRef}
            type="text"
            defaultValue={weight}
            required
          />
        </Form.Group>
      </Col>
      <Col>
        <Form.Group controlId="reps">
          <Form.Label>Reps</Form.Label>
          <Form.Control
            ref={repsRef}
            type="number"
            defaultValue={reps}
            required
          />
        </Form.Group>
      </Col>
      <Col xs="auto">
        <Stack direction="horizontal" gap={3}>
          <Button variant="outline-primary" onClick={() => editData()}>
            Edit
          </Button>
          <Button variant="outline-danger" onClick={() => removeSet(id)}>
            Del
          </Button>
        </Stack>
      </Col>
    </Stack>
  );
};

export default EditSetInfo;
