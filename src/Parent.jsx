import React, { useState } from "react";
import Child from "./components/Child";

const Parent = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  const handleClick = () => {
    setTodo((prev) => [...prev, input]);
    setInput("");
  };

  const handleDelete = (val) => {
    setTodo((prev) => prev.filter((_, idx) => idx !== val));
  };

  const handleEdit = (idxToUpdate, val) => {
    setTodo((prev) =>
      prev.map((todo, idx) => (idx === idxToUpdate ? val : todo))
    );
  };

  return (
    <>
      <h1>TODO LIST</h1>
      <input
        type="text"
        name="todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleClick}>Add</button>
      <Child allTodo={todo} onDelete={handleDelete} onEdit={handleEdit} />
    </>
  );
};

export default Parent;
