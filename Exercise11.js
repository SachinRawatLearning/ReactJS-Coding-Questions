// Challenge: Write a simple React component that keeps track of how many times a button is clicked. Every time the button is pressed, the number should increase.

// Task: Implement this using the useState hook.
// Why This Matters: This is one of the most basic examples of state management in React. It demonstrates how to store, update, and display dynamic values with ease using hooks.
//Pro Tip: How would you add a "Reset" button to set the count back to 0? Try it out!

import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div
        style={{
          display: "flex",
        }}
      >
        <button
          onClick={() => setCount((prevState) => prevState + 1)}
          style={{
            color: "white",
            backgroundColor: "black",
            marginLeft: "180px",
            display: "flex",
          }}
        >
          Click Me!
        </button>
        <button
          onClick={() => setCount(0)}
          style={{
            color: "white",
            backgroundColor: "black",
            marginLeft: "20px",
            display: "flex",
          }}
        >
          Reset
        </button>
      </div>
      <span style={{ display: "block", textAlign: "center" }}>{count}</span>
    </div>
  );
}
