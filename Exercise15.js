// 5. Toggle Between "Hello" and "Goodbye" Messages
// Challenge: Create a component that displays "Hello" or "Goodbye" based on a button toggle. Every time the button is clicked, the message should switch.
// Why This Matters: Conditional rendering is a core part of React's power, and this challenge helps solidify how to change what’s displayed based on state.

// Pro Tip: How would you modify this so that it displays "Hello" in blue and "Goodbye" in red?

import { useState } from "react";
import "./styles.css";

export default function App() {
  const [greet, setGreet] = useState(true);

  return (
    <div>
      <p className={greet ? "Hello" : "Goodbye"}>
        {greet ? "Hello" : "Goodbye"}
      </p>
      <button onClick={() => setGreet(!greet)}>Toggle Message</button>
    </div>
  );
}
