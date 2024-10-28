// Build a To-Do List with Add and Remove Functionality
// Challenge: Create a to-do list where users can add tasks by typing into an input field and pressing "Add." Each task should have a "Remove" button to delete the task.
// Why This Matters: Managing lists and state updates is a common task in React applications, especially for building dynamic user interfaces.

// Pro Tip: What happens if you try to add an empty to-do item? How would you prevent that?
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  return (
    <div>
      <div>
        <input
          placeholder="To Do"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          onClick={() =>
            value.trim() && setTodoList((prevState) => [...prevState, value])
          }
        >
          Submit
        </button>
      </div>
      <div>
        <ul>
          {todoList.map((item, index) => (
            <li key={index}>
              {item}
              <button
                className="remove"
                onClick={() =>
                  setTodoList(todoList.filter((_, i) => i !== index))
                }
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
