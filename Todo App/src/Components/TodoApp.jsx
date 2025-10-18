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

    settasks([...tasks, task]);
    settask("");
  }

  return (
    <>
      <form  onSubmit={(e) => e.preventDefault()}>
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
        {tasks.map((item,index)=>(
            
            <li id={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default TodoApp;
