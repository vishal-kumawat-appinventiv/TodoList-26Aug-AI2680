import React, { useEffect, useState } from "react";
import Child from "./components/Child";
import { Toaster, toast } from "react-hot-toast";

const Parent = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  const handleClick = () => {
    if (input === "") {
      toast("Empty Todo Cant be added :(");
      return;
    }
    setTodo((prev) => [...prev, input]);
    toast("Todo Added :)");
    setInput("");
  };

  const handleDelete = (val) => {
    setTodo((prev) => prev.filter((_, idx) => idx !== val));
    toast("Todo Deleted :)");
  };

  const handleEdit = (idxToUpdate, val) => {
    setTodo((prev) =>
      prev.map((todo, idx) => (idx === idxToUpdate ? val : todo))
    );
    toast("Todo Edited :)");
  };

  useEffect(() => {
    console.log("Mount + Update")
  })

  useEffect(() => {
    setTodo(JSON.parse(localStorage.getItem("todos")) || []);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);

  return (
    <>
      <Toaster position="top-left" reverseOrder={false} />
      <div className="parentContainer">
        <h1 className="title">TODO LIST</h1>
        <div className="inputContainer">
          <input
            className="inputField"
            type="text"
            name="todo"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="addButton" onClick={handleClick}>
            Add
          </button>
        </div>
        <Child allTodo={todo} onDelete={handleDelete} onEdit={handleEdit} />
      </div>
    </>
  );
};

export default Parent;
