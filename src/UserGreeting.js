import React from 'react';

// Functional component with parameters (props)
function UserGreeting({ name, age, location }) {
  return (
    <div>
      <h2>Hello, {name}!</h2>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  );
}

export default UserGreeting;
