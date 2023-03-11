import React from 'react';

export default function SignUp() {
  return (
    <div className="content">
      <div className="main">
        <h5>Sign Up</h5>
        <form>
          <ul>
            <label htmlFor="input-email">
              Email
              <input type="email" name="email" id="input-email" style={{ color: '#0000' }} />
            </label>
            <label htmlFor="input-firstName">
              First Name
              <input type="text" name="firstName" id="input-firstName" style={{ color: '#0000' }} />
            </label>
            <label htmlFor="input-lastName">
              Last Name
              <input type="text" name="lastName" id="input-lastName" style={{ color: '#0000' }} />
            </label>
            <label htmlFor="input-password">
              Password
              <input
                type="password"
                name="password"
                id="input-password"
                style={{ color: '#0000' }}
              />
            </label>
            <label htmlFor="input-password-rep">
              Repeat Password
              <input
                type="password"
                name="passwordRepeat"
                id="input-password-rep"
                style={{ color: '#0000' }}
              />
            </label>
            <button type="submit" className="btn">
              <span>Add</span>
            </button>
          </ul>
        </form>
      </div>
      {/* <div className="side">
        <Sidebar />
      </div> */}
    </div>
  );
}
