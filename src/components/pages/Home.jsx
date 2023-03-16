import React from 'react';
import Post from '../ui/Post';

export default function Home({ recentPosts }) {
  return (
    <>
      <div className="row justify-content-md-center">
        <div className="col-md-auto">
          <h2>Most recent posts</h2>
        </div>
      </div>
      <div className="row">
        {recentPosts.map((post) => (
          <div className="col-12" key={post.id}>
            <Post post={post} />
          </div>
        ))}
      </div>
    </>
  );
}
