import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { WorkoutInfo } from "../../Interfaces";
import WorkoutCard from "./WorkoutCard";

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
