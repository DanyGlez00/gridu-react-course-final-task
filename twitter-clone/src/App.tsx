import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
