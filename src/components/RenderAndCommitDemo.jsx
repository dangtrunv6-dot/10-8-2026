import React, { useState } from 'react';

const RenderAndCommitDemo = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="card p-4 shadow-sm my-3">
      <h2>Exercise 17: Render and Commit Demo</h2>
      <p className="fs-4">Count: {count}</p>
      <button className="btn btn-success" onClick={handleClick}>
        Increment
      </button>
    </div>
  );
};

export default RenderAndCommitDemo;