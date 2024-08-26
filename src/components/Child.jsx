import React from "react";

const Child = ({ allTodo, onDelete }) => {
  return (
    <>
      {allTodo.map((todo, idx) => (
        <div key={idx}>
          <span>{todo}</span>
          <button onClick={() => onDelete(idx)}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default Child;
