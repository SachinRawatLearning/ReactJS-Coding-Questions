/** 
  Challenge: User should be able to type in any characters on input and those character should show in the browser.
**/
import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder="Enter Text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <p>{input}</p>
    </>
  );
}
