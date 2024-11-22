// src/components/Board.js
import React from 'react';
import List from './List';

function Board() {
  return (
    <div className="board">
      <h2>Project Board</h2>
      <div className="lists-container">
        <List title="To Do" />
        <List title="In Progress" />
        <List title="Done" />
      </div>
    </div>
  );
}

export default Board;
