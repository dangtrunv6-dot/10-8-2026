import React, { useState } from 'react';

const EventHandlingDemo = () => {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="card p-4 shadow-sm my-3">
      <h2>Exercise 16: Event Handling Demo</h2>
      <p className="fs-4">Count: {count}</p>
      <button className="btn btn-primary style-btn" onClick={handleButtonClick}>
        Increase Count
      </button>
    </div>
  );
};

export default EventHandlingDemo;