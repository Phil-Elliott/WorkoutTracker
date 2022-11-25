import { Badge, Button, Col, Row, Stack } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useWorkout } from "./WorkoutLayout";

const Workout = ({ deleteWorkout }: { deleteWorkout: any }) => {
  const workout = useWorkout();
  const navigate = useNavigate();

  return (
    <>
      <Row>
        <Col>
          <h1>{workout.workout}</h1>
        </Col>
        <Col xs="auto">
          <Stack direction="horizontal" gap={3}>
            <Link to={`/${workout.id}/edit`}>
              <Button variant="outline-primary">Edit</Button>
            </Link>
            <Button
              variant="outline-danger"
              onClick={() => {
                deleteWorkout(workout.id);
                navigate("/");
              }}
            >
              Del
            </Button>
            <Link to="..">
              <Button variant="outline-secondary">Back</Button>
            </Link>
          </Stack>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>{workout.date}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>{workout.exercise}</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Stack gap={3}>
            {workout.sets.map((set: any) => {
              return (
                <Stack key={set.id} direction="horizontal" gap={3}>
                  <p>{set.weight}</p>
                  <p>{set.reps}</p>
                </Stack>
              );
            })}
          </Stack>
        </Col>
      </Row>
    </>
  );
};

export default Workout;
