import React, { useState } from 'react';
import { HeaderLogo } from '../../components/Logo';

function RegisterPage({ onNavigate }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onNavigate('success');
  };

  return (
    <section className="screen screen-form screen-register">
      <HeaderLogo />
      <div className="form-wrap">
        <h2 className="form-title">Create Account</h2>
        <form className="form" onSubmit={handleSubmit}>
          <input type="text" name="firstName" placeholder="Enter your first name" required />
          <input type="text" name="lastName" placeholder="Enter your last name" required />
          <input type="email" name="email" placeholder="Enter your email" required />
          <div className="input-wrap">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Enter password"
              required
            />
            <button
              type="button"
              className="toggle-password"
              aria-label="Toggle password visibility"
              onClick={() => setShowPassword((p) => !p)}
            >
              <span className="icon-eye" />
            </button>
          </div>
          <div className="input-wrap">
            <input
              type={showConfirm ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="Confirm password"
              required
            />
            <button
              type="button"
              className="toggle-password"
              aria-label="Toggle password visibility"
              onClick={() => setShowConfirm((p) => !p)}
            >
              <span className="icon-eye" />
            </button>
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Register
          </button>
        </form>
        <p className="form-footer form-footer-with-button">
          Already have an account?
        </p>
        <button
          type="button"
          className="btn btn-primary btn-block btn-footer-login"
          onClick={() => onNavigate('login')}
        >
          Login
        </button>
      </div>
    </section>
  );
}

export default RegisterPage;
