import "./App.css";
import { useState } from "react";

function onclickME() {
  console.log("running");
}



function App() {
  const [count, setCount] = useState(0);
  function updateCounter() {
    setCount(count+1)
  }
  const courses = [
    {
      id: 1,
      course: "pythion",
      price: 500,
    },
    { id: 2, course: "pythion", price: 500 },
    { id: 3, course: "pythion", price: 500 },
    { id: 4, course: "pythion", price: 500 },
  ];

  const listItems = courses.map((course) => (
    <li key={course.id}>
      {course.course} {course.price}
    </li>
  ));
  return (
    <>
      <ul>{listItems}</ul>
      <hr />
      <div>
        <button onClick={onclickME}>click me</button>
      </div>
      <div>
        <p>counter</p>
        <button onClick={updateCounter}>{count}</button>
      </div>
    </>
  );
}

export default App;
