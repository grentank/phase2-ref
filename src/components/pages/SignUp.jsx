import axios from 'axios';
import React, { useState } from 'react';

export default function SignUp() {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    repeatPassword: '',
  });

  const changeHandler = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const valid = formData.password === formData.repeatPassword ? ' is-valid' : ' is-invalid';

  const submitHandler = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.repeatPassword) return;
    axios
      .post('/api/auth/signup', formData)
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
                value={formData.email}
                onChange={changeHandler}
                className="form-control"
                id="email-input"
                placeholder="Email"
                aria-describedby="basic-addon3"
                required
              />
            </div>
            <div className="form-text">
              Email must be of the form <strong>***@***</strong>
            </div>
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text">Name</span>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={changeHandler}
              className="form-control"
              placeholder="First name"
              aria-label="Username"
              required
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={changeHandler}
              className="form-control"
              placeholder="Last name"
              aria-label="Server"
              required
            />
          </div>

          <div className="input-group mb-3">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={changeHandler}
              className="form-control"
              placeholder="Password"
              aria-label="Username"
              required
            />
            <input
              type="password"
              name="repeatPassword"
              value={formData.repeatPassword}
              onChange={changeHandler}
              className={`form-control${valid}`}
              placeholder="Repeat password"
              aria-label="Server"
              required
            />
            <div className="invalid-feedback">Passwords should be identical</div>
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
