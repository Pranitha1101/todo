import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addTodo = () => {
    if (task.trim() === "") return;
    if (editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = task;
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      setTodos([...todos, task]);
    }
    setTask("");
  };
  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };
  const editTodo = (index) => {
    setTask(todos[index]);
    setEditIndex(index);
  };

  return (
    <div className="app">
      <h1>📝 To-Do List</h1>

      <div className="input-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a new task..."
        />
        <button onClick={addTodo}>{editIndex !== null ? "Update" : "Add"}</button>
      </div>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <div>
              <button className="edit-btn" onClick={() => editTodo(index)}>
                edit
              </button>
              <button className="delete-btn" onClick={() => deleteTodo(index)}>
                delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

 export default App;
// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [tasks, setTasks] = useState([]);
//   const [input, setInput] = useState('');

//   const addTask = () => {
//     if (input.trim() === '') return;
//     setTasks([...tasks, { text: input, completed: false }]);
//     setInput('');
//   };

//   const toggleTask = (index) => {
//     const newTasks = [...tasks];
//     newTasks[index].completed = !newTasks[index].completed;
//     setTasks(newTasks);
//   };

//   const deleteTask = (index) => {
//     const newTasks = tasks.filter((_, i) => i !== index);
//     setTasks(newTasks);
//   };

//   return (
//     <div className="App">
//       <h1>To-Do List</h1>
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder="Add a task..."
//       />
//       <button onClick={addTask}>Add</button>

//       <ul>
//         {tasks.map((task, index) => (
//           <li
//             key={index}
//             style={{
//               textDecoration: task.completed ? 'line-through' : 'none',
//             }}
//           >
//             {task.text}
//             <button onClick={() => toggleTask(index)}>
//               {task.completed ? 'Undo' : 'Done'}
//             </button>
//             <button onClick={() => deleteTask(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default App;