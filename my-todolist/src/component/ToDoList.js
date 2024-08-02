import React from "react";
import "../App.css";

export function TodoList() {
  const [toDoList, setToDoList] = React.useState([]); // toDoList is an array of inputs
  const [isEditing, setIsEditing] = React.useState(null); // Tracks the index of the item being edited
  const [editValue, setEditValue] = React.useState(""); // Track input while editing

  const handleEdit = (index) => {
    setIsEditing(index);
    setEditValue(toDoList[index]);
  };

  const handleSave = (index) => {
    const updatedToDoList = [...toDoList];
    updatedToDoList[index] = editValue;
    setToDoList(updatedToDoList);
    setIsEditing(null);
    setEditValue("");
  };

  const showToDoList = () => {};
  // -when click edit, it will be input and 2 buttons(save, cancel)
  const editToDoList = (index) => {};
  const saveToDoList = (index) => {};

  const deleteToDoList = (index) => {
    const newList = toDoList.filter((value, i, array) => {
      return i !== index;
    });
    setToDoList(newList);
  };

  return (
    <div className="container">
      {toDoList.map((val, index) => (
        <div key={index}>
          {isEditing === index ? (
            <input
              type="text"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
            />
          ) : (
            <span>{val}</span>
          )}

          <div className="buttons">
            {isEditing === index ? (
              <button onClick={() => saveToDoList(index)}>Save</button>
            ) : (
              <button onClick={() => editToDoList(index)}>Edit</button>
            )}
            <button onClick={() => deleteToDoList(index)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
