import Card from "../components/card/Card";
import {
  DEVELOPMENT_IN_PROGRESS,
  REMINDER_DESCRIPTION,
  REMINDER_TITLE,
  SURVEY_DESCRIPTION,
  SURVEY_TITLE,
} from "../contants/dataConstants";
import styles from "./page.module.css";
export default function Home() {
  return (
    <main>
      <div className={styles.homeContainer}>
        <div className={styles.descriptionContainer}>
          <h1>Emaily</h1>
          <p>Schedule a reminder for an event</p>
          <p>or</p>
          <p>Collect feedback from users</p>
        </div>
        <div className={styles.cardsContainer}>
          <Card
            title={REMINDER_TITLE}
            description={REMINDER_DESCRIPTION}
            url="/reminder"
          />
          <Card
            title={SURVEY_TITLE}
            description={`${SURVEY_DESCRIPTION} \n (${DEVELOPMENT_IN_PROGRESS})`}
            url="/surveys"
          />
        </div>
      </div>
    </main>
  );
}
