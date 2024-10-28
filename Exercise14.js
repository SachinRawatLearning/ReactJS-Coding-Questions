// Implement Debouncing in a Search Input
// Challenge: Build a search input that waits 500ms after the user stops typing before performing a search (simulated by updating the state). Use useEffect for this.
// Why This Matters: Debouncing is essential in search fields to prevent unnecessary API calls, improving performance and user experience.

// Pro Tip: How could you improve this by adding a loading indicator while the user types?
// 4. Implement Debouncing in a Search Input
// Challenge: Build a search input that waits 500ms after the user stops typing before performing a search (simulated by updating the state). Use useEffect for this.

import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState("");
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    value && setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
      setText(value);
    }, 500);

    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div>
      <input
        placeholder="Search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <h3>{isLoading ? "Loading..." : text}</h3>
    </div>
  );
}
