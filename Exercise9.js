/**
  Challenge: Pressing `Increment` button should increase the counter count by one. Pressing `Decrement` button should decrease the counter count by one.
**/
import { useState } from "react";

const App = () => {
  const [counterValue, setCounterValue] = useState(0);

  return (
    <div>
      <h2>Counter: {counterValue}</h2>
      <button onClick={() => setCounterValue(counterValue + 1)}>
        Increment
      </button>
      <button onClick={() => setCounterValue(counterValue - 1)}>
        Decrement
      </button>
    </div>
  );
};
export default App;
