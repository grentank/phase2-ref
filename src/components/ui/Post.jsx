import React from 'react';

export default function Post({ post }) {
  return (
    <li className="design">
      <a href="/replies">
        <div className="icon">
          <i className="fas fa-marker" />
        </div>
        <div className="txt">
          <h5>{post.title}</h5>
          <div className="sub">
            <strong>10 Replies</strong>
          </div>
        </div>
      </a>
    </li>
  );
}
