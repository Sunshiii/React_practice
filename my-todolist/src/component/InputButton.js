import React from "react";
import "../App.css";

export function Input() {
  const [toDoList, setToDoList] = React.useState([]); // toDoList is an array of inputs
  const [query, setQuery] = React.useState("");

  const getInput = (e) => {
    setQuery(e.target.value);
  };

  const addToArray = () => {
    if (query.trim() !== "") {
      setToDoList([...toDoList, query]);
      setQuery("");
    }
  };

  return (
    <div className="input">
      <input value={query} onChange={getInput} />
      <button onClick={addToArray}>Submit</button>
    </div>
  );
}
