import Link from "next/link";
import ReminderClientComponent from "./ReminderClientComponent";

export default async function Reminder() {
  const year = new Date().getFullYear();
  return (
    <main>
      <div>
        <h3>Create a Reminder email for a list of days</h3>
        <p>
          Just provide the list of dates on which you want to be reminded and we
          will send you a reminder email.
        </p>
        <p>
          You can use it to remind you about anything. For example a party,
          friend&apos;s birthday, Watch a movie or even a holiday.
        </p>
        <p>
          The dates that you set will be considered only until the end of the
          year <strong>{year}</strong>.
        </p>
        <h4>
          Check all your reminders{" "}
          <a className="link" href={"/reminder/all"}>
            here
          </a>
        </h4>
        <div>
          <ReminderClientComponent />
        </div>
      </div>
    </main>
  );
}
