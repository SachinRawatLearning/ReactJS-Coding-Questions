/**
  Challenge: Make button disabled when there is no character on the input field. Enable the `Submit` button (remove button from being disabled) when there is at least one character.
  
  Solution: https://codepen.io/angelo_jin/pen/dyVmyYz
  Video for reference: https://youtu.be/VzNNjNmbXpY
**/
import { useState } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <h3>Disable Button Challenge</h3>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button disabled={inputValue.length ? false : true}>Submit</button>
    </>
  );
}
