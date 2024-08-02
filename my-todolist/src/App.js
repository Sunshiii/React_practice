import React from "react";
import "./App.css";
import { Header } from "./component/Header";
import { InputButton } from "./component/InputButton";
import { ToDoList } from "./component/ToDoList";

function App() {
  // const [query, setQuery] = React.useState(""); // query is an input(string)

  // const handleClick = () => {
  //   setQuery("");
  //   setToDoList([...toDoList, query]); // In this array means [all of them, an new input]
  // };

  return (
    <div>
      <Header />
      <InputButton />
      <ToDoList />
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
