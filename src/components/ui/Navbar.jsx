import React from 'react';

export default function Navbar() {
  const firstName = 'Bob';
  const lastName = 'Bobovski';
  return (
    <>
      <header>
        <div className="home">
          <i className="fas fa-home" />
        </div>
        <ul className="menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/replies">My replies</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/signup">Register</a>
          </li>
        </ul>
      </header>
      <div className="banner">
        <div className="ava">
          <img
            src={`https://eu.ui-avatars.com/api/?background=4abbf3&color=fff&name=${firstName}+${lastName}&size=100`}
            alt="ava"
          />
        </div>
        <h4>
          {firstName} {lastName}
          <span>#5136</span>
        </h4>
        <div className="btns">
          <div className="btn">
            <span>Add new post</span>
          </div>
        </div>
      </div>
    </>
  );
}
