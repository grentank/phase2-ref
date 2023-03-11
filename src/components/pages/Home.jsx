import React from 'react';
import Post from '../ui/Post';
import Sidebar from '../ui/Sidebar';

export default function Home() {
  return (
    <div className="content">
      <div className="main">
        <h5>Recent posts</h5>
        <ul className="posts">
          <Post />
          <Post />
          <Post />
        </ul>
      </div>
      <div className="side">
        <Sidebar />
      </div>
    </div>
  );
}
