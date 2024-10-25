/**
  Challenge: Show entire Child component content inside Parent component. Only add code on Parent Component below
**/
//Child
function Child() {
  return <div>This is children content</div>;
}

// Add code only here
function Parent({ children }) {
  return (
    <div>
      <h3>Parent Component</h3>
      {children}
    </div>
  );
}

export default function App() {
  return (
    <Parent>
      <Child />
    </Parent>
  );
}
