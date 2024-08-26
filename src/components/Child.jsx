import React, { useState } from "react";

const Child = ({ allTodo, onDelete, onEdit }) => {
  const [editToggle, setEditToggle] = useState(null);
  const [editedValue, setEditedValue] = useState("");

  const handleToggle = (idx, currentValue) => {
    setEditToggle(idx);
    setEditedValue(currentValue);
  };

  const handleSave = (idx) => {
    onEdit(idx, editedValue);
    setEditToggle(null);
  };

  return (
    <>
      {allTodo.map((todo, idx) => (
        <div key={idx}>
          {editToggle === idx ? (
            <input
              type="text"
              value={editedValue}
              onChange={(e) => setEditedValue(e.target.value)}
            />
          ) : (
            <span>{todo}</span>
          )}
          <button onClick={() => onDelete(idx)}>Delete</button>
          {editToggle === idx ? (
            <button onClick={() => handleSave(idx)}>Save</button>
          ) : (
            <button onClick={() => handleToggle(idx, todo)}>Edit</button>
          )}
        </div>
      ))}
    </>
  );
};

export default Child;
