import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './ui/Navbar';
import Replies from './pages/Replies';
import SignUp from './pages/SignUp';

export default function App() {
  return (
    <div className="profilecont">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/replies" element={<Replies />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Replies />} />
      </Routes>
    </div>
  );
}
