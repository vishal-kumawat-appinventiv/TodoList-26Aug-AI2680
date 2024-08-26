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
      <div className="todoContainer">
        {allTodo.map((todo, idx) => (
          <div key={idx} className="todoItem">
            {editToggle === idx ? (
              <input
                className="editInput"
                type="text"
                value={editedValue}
                onChange={(e) => setEditedValue(e.target.value)}
              />
            ) : (
              <span className="todoText">{todo}</span>
            )}
            <button className="deleteButton" onClick={() => onDelete(idx)}>
              Delete
            </button>
            {editToggle === idx ? (
              <button className="saveButton" onClick={() => handleSave(idx)}>
                Save
              </button>
            ) : (
              <button
                className="editButton"
                onClick={() => handleToggle(idx, todo)}
              >
                Edit
              </button>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Child;
