import React from "react";

const Surveys = () => {
  const arr = ["hello", "one", "two", "three"];
  return (
    <main>
      <h2>this is surveys route</h2>
      <section>
        <ul>
          {arr.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </section>
    </main>
  );
};

export default Surveys;