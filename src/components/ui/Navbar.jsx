import React from 'react';

export default function Navbar() {
  const firstName = 'Bob';
  const lastName = 'Bobovski';
  return (
    <nav className="navbar navbar-expand bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <img
              style={{ borderRadius: '50%' }}
              src={`https://eu.ui-avatars.com/api/?background=4abbf3&color=fff&name=${firstName}+${lastName}&size=100`}
              alt="ava"
            />
            <h4 style={{ margin: '10px' }}>
              {firstName} {lastName}
              <span>#5136</span>
            </h4>
          </div>
        </a>
        <div className="navbar-nav">
          <a className="nav-link active" href="/">
            Home
          </a>
          <a className="nav-link" href="/replies">
            Replies
          </a>
          <a className="nav-link disabled" href="/">
            Add post
          </a>
        </div>
        <div className="navbar-nav">
          <a className="nav-link active" href="/login">
            Login
          </a>
          <a className="nav-link" href="/signup">
            Signup
          </a>
        </div>
      </div>
    </nav>
  );
}
