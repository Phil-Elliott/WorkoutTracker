import { Row, Col, Button, Stack, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { WorkoutInfo } from "../../App";
import styles from "../../assets/Workouts.module.css";

const Workouts = ({ workouts }: any) => {
  return (
    <>
      <Row className="align-items-center mb-4">
        <Col>
          <h1>Workouts</h1>
        </Col>
        <Col xs="auto">
          <Link to="/new">
            <Button variant="primary">New Workout</Button>
          </Link>
        </Col>
      </Row>
      <Row xs={1} sm={2} lg={3} xl={4} className="g-3">
        {workouts.map((workout: WorkoutInfo) => {
          return (
            <Col key={workout.id}>
              <WorkoutCard workout={workout} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Workouts;

const WorkoutCard = ({ workout }: any) => {
  return (
    <Card
      as={Link}
      to={`/${workout.id}`}
      className={`h-100 text-reset text-decoration-none ${styles.card}`}
    >
      <Card.Body>
        <Stack gap={1}>
          <h2>{workout.workout}</h2>
          <p>{workout.date}</p>
        </Stack>
      </Card.Body>
    </Card>
  );
};
