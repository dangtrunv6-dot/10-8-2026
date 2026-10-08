import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import EventHandlingDemo from './components/EventHandlingDemo';
import RenderAndCommitDemo from './components/RenderAndCommitDemo';
import SnapshotDemo from './components/SnapshotDemo';
import Exercise19 from './components/Exercise19';

function App() {
  return (
    <Router>
      <div className="container my-4">
        {/* Navigation Bar */}
        <nav className="nav nav-pills nav-justified mb-4 bg-dark p-2 rounded">
          <Link to="/" className="nav-link text-white fw-bold">Ex 16 (Event Handling)</Link>
          <Link to="/ex17" className="nav-link text-white fw-bold">Ex 17 (Render & Commit)</Link>
          <Link to="/ex18" className="nav-link text-white fw-bold">Ex 18 (State Snapshot)</Link>
          <Link to="/ex19" className="nav-link text-white fw-bold">Ex 19 (PropTypes)</Link>
        </nav>

        {/* Content Routes */}
        <Routes>
          <Route path="/" element={<EventHandlingDemo />} />
          <Route path="/ex17" element={<RenderAndCommitDemo />} />
          <Route path="/ex18" element={<SnapshotDemo />} />
          <Route path="/ex19" element={<Exercise19 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;