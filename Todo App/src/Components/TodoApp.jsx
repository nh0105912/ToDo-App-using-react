import React, { useState } from "react";

const TodoApp = () => {
  const [task, settask] = useState("");
  const [tasks, settasks] = useState([]);

  function handleChange(e) {
    settask(e.target.value);
  }

  function handleKey(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      addTask();
    }
  }
  function addTask() {
    if (task.trim() === "") return;

    settasks([task,...tasks]);
    settask("");
  }

  function deltTask(index){
    const updateTask=tasks.filter((_,i)=> i!==index);
    settasks(updateTask)

  }
  
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={task}
          onChange={handleChange}
          onKeyDown={handleKey}
          placeholder="Enter task"
        />
        <button type="button" onClick={addTask}>
          Add
        </button>
      </form>

      <ul>
        {tasks.map((item, index) => (
          <li
            id={index}
            style={{
        
              width: "400px",
            }}
          >
            {item}
            <button style={{
                marginLeft:"90%"
            }} type="button" onClick={()=>deltTask(index)}>X</button>
          </li>
        ))}
      </ul>


    </>
  );
};

export default TodoApp;
