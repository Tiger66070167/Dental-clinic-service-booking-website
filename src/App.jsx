import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import HomePage from './Homepage';
import History from './History';
import Confirm from './Confirm';
import List from './List';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/history" element={<History />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </Router>
  );
}

export default App;
