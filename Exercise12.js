// 2. Create a Form to Capture User Input
// Challenge: Implement a form with two input fields—name and email. The values should update dynamically as the user types, and when the form is submitted, the entered data should appear on the screen
// Why This Matters: Handling form input in React is a critical skill, especially for applications requiring user interactions, like login forms or search fields.

// Pro Tip: How could you handle validation to ensure the email format is correct before allowing the form to submit?

import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [result, setResult] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setResult(`Name: ${name}, Email: ${email}`);
  };

  return (
    <div>
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <span>{result}</span>
    </div>
  );
}
