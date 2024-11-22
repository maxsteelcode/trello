import React, { useState } from 'react';

function Card({ text, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false); // Toggle edit mode
  const [editText, setEditText] = useState(text); // Track the new text

  const handleSave = () => {
    setIsEditing(false);
    onEdit(editText); // Pass updated text to parent
  };

  return (
    <div className="card">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <p>{text}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={onDelete}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default Card;
