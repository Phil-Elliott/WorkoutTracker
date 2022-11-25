import { Button, Col, Form, Row, Stack } from "react-bootstrap";

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
    </Stack>
  );
};

export default DisplayExercise;
