/** 
  Challenge: Parent text (I need to be updated from my child) should be updated when Child button below is clicked. Feel free to use any string to update the parent's current string.
**/
import { useState } from "react";

//Child
function Child({ setValue }) {
  return (
    <>
      <div>Child</div>
      <button onClick={() => setValue("Changed")}>Change Parent Value</button>
    </>
  );
}

//Parent
export default function App() {
  const [value, setValue] = useState("I need to be updated from my child");

  return (
    <>
      <h3>Update Parent State Challenge (Using Callback)</h3>
      <div className="wrapper">
        <div>Parent</div>
        <div className="box-wrapper">{value}</div>
      </div>

      <div className="wrapper">
        <Child setValue={setValue} />
      </div>
    </>
  );
}
