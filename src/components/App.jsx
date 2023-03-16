import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './ui/Navbar';
import Replies from './pages/Replies';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

export default function App({ user, recentPosts }) {
  return (
    <div className="container">
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<Home recentPosts={recentPosts} />} />
        <Route path="/replies" element={<Replies />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login" element={<Replies />} />
      </Routes>
    </div>
  );
}
