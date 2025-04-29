import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import SignUp from './pages/Signup';
import Login from './pages/Login';
import Attractions from './pages/Attractions';
import SortedAttractions from './pages/SortedAttractions';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/attractions" element={<Attractions />} />
        <Route path="/sorted-attractions" element={<SortedAttractions />} />
      </Routes>
    </Router>
  );
}

export default App;