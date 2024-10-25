/**
  Challenge: Make the button functional
  A click on button should toggle (show/hide) the string `Toggle Challenge` each time it is pressed
**/
import { useState } from "react";

export default function App() {
  const [shown, setShown] = useState(true);

  return (
    <>
      <button onClick={() => setShown(!shown)}>
        {shown ? "Hide Element Below" : "Show Element Below"}
      </button>

      {shown ? <div>Toggle Challenge</div> : ""}
    </>
  );
}
