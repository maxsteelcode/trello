import React, { useState } from 'react';

function MultiStateComponent() {
  // Declare multiple state variables
  const [text, setText] = useState(''); // Text input state
  const [count, setCount] = useState(0); // Counter state
  const [isChecked, setIsChecked] = useState(false); // Checkbox state

  // Handle changes
  const handleTextChange = (event) => setText(event.target.value);
  const increaseCount = () => setCount(count + 1);
  const toggleCheckbox = () => setIsChecked(!isChecked);

  return (
    <div>
      <h2>Text: {text}</h2>
      <input
        type="text"
        value={text}
        onChange={handleTextChange}
        placeholder="Type something"
      />

      <h2>Counter: {count}</h2>
      <button onClick={increaseCount}>Increase</button>

      <h2>Checkbox: {isChecked ? 'Checked' : 'Unchecked'}</h2>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={toggleCheckbox}
      />
    </div>
  );
}

export default MultiStateComponent;
