import React, { useState } from 'react';

const SnapshotDemo = () => {
  const [count, setCount] = useState(0);
  const [snapshot, setSnapshot] = useState(null);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleSnapshot = () => {
    setSnapshot(count);
  };

  const handleRestore = () => {
    if (snapshot !== null) {
      setCount(snapshot);
    }
  };

  return (
    <div className="card p-4 shadow-sm my-3">
      <h2>Exercise 18: State as a Snapshot Demo</h2>
      <p className="fs-4">Count: {count}</p>
      <div className="d-flex gap-2">
        <button className="btn btn-outline-primary" onClick={handleIncrement}>
          Increment
        </button>
        <button className="btn btn-outline-secondary" onClick={handleSnapshot}>
          Take Snapshot
        </button>
        <button className="btn btn-outline-warning" onClick={handleRestore}>
          Restore Snapshot
        </button>
      </div>
    </div>
  );
};

export default SnapshotDemo;