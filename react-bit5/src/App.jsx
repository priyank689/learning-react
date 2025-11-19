import React from "react";
import CountUp from "./CountUp"; // <-- your component

export default function App() {
  return (
    <div style={{ padding: "50px", fontSize: "40px" }}>
      <h1>CountUp Demo</h1>

      {/* Example 1 */}
      <CountUp
        from={0}
        to={100}
        duration={2}
        className="counter"
        separator=","
      />

      <br />
      <br />

      {/* Example 2 */}
      <CountUp
        from={500}
        to={1500}
        duration={3}
        className="counter"
        separator=","
        delay={1}
      />

      <br />
      <br />

      {/* Example 3: Count down */}
      <CountUp
        from={1000}
        to={0}
        direction="down"
        duration={4}
        className="counter"
      />
    </div>
  );
}
