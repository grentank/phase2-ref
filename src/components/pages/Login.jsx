import axios from 'axios';
import React from 'react';

export default function Login() {
  const submitHandler = async (e) => {
    e.preventDefault();
    axios
      .post('/api/auth/login', Object.fromEntries(new FormData(e.target)))
      .then(() => {
        window.location = '/';
      })
      .catch(console.error);
  };

  return (
    <div className="row justify-content-center">
      <div className="col-4 align-self-center text-center">
        <h3>Register</h3>
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <div className="input-group">
              <input
                type="email"
                name="email"
                className="form-control"
                id="email-input"
                placeholder="Email"
                aria-describedby="basic-addon3"
                required
              />
            </div>
            <div className="form-text">
              Mock users: "1@1", password "1"; "2@2" with password "2"
            </div>
          </div>

          <div className="input-group mb-3">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              aria-label="Username"
              required
            />
          </div>

          <div className="input-group mb-3 d-grid">
            <button type="submit" className="btn btn-lg btn-outline-primary">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
