import Link from "next/link";
import React from "react";

const Surveys = () => {
  return (
    <main>
      <h2>Development in progress</h2>
      <section>
        <p>
          Meanwhile checkout our <Link href={"/reminder"}>Reminder emails</Link>{" "}
          feature. Its completely free of charge.
        </p>
      </section>
    </main>
  );
};

export default Surveys;
