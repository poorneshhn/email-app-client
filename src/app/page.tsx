import styles from "./page.module.css";
export default function Home() {
  return (
    <main>
      <div className={styles.homeContainer}>
        <h1>Email App</h1>
        <p>Collect feedback from users</p>
      </div>
    </main>
  );
}
