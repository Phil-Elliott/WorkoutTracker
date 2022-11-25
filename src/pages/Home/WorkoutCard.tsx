import { Card, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../../assets/Workouts.module.css";

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

export default WorkoutCard;
