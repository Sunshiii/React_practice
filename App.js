import React from "react";
import "./App.css";

function App() {
  const [toDoList, setToDoList] = React.useState([]); // toDoList is an array of inputs
  const [query, setQuery] = React.useState(""); // query is an input(string)
  const [isEditing, setIsEditing] = React.useState(null); // Tracks the index of the item being edited
  const [editValue, setEditValue] = React.useState(""); // Track input while editing

  const handleClick = () => {
    setQuery("");
    setToDoList([...toDoList, query]); // In this array means [all of them, an new input]
  };

  const handleDelete = (index) => {
    setToDoList(toDoList.filter((_, toDoListIndex) => toDoListIndex !== index)); // Return all of array without that index
  };

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

  return (
    <div>
      <div>
        <div className="App">TodoList</div>
      </div>

      <div className="input">
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
        <button onClick={handleClick}>Submit</button>
      </div>

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
                <button onClick={() => handleSave(index)}>Save</button>
              ) : (
                <button onClick={() => handleEdit(index)}>Edit</button>
              )}
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

//   return (
//     <div>
//       <div>
//         <div className="App">TodoList</div>
//       </div>

//       <div className="input">
//         <input value={query} onChange={(e) => setQuery(e.target.value)} />
//         <button onClick={handleClick}>Submit</button>
//       </div>
//       <div>
//         {toDoList.map((val, index) => (
//           <div key={index}>
//             {val}
//             <div className="container">
//               <div className="buttons">
//                 <button>edit</button>
//                 <button onClick={() => handleDelete(index)}>delete</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// }

export default App;
