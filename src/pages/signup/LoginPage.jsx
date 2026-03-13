import React, { useState } from 'react';
import { HeaderLogo } from '../../components/Logo';

function LoginPage({ onNavigate }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onNavigate('home');
  };

  return (
    <section className="screen screen-form screen-login">
      <HeaderLogo />
      <div className="form-wrap">
        <h2 className="form-title">Login</h2>
        <form className="form" onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Enter your email" required />
          <div className="input-wrap">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Enter your password"
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
          <a
            href="#"
            className="link forgot-link"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('forgot');
            }}
          >
            Forgot Password?
          </a>
          <button type="submit" className="btn btn-primary btn-block">
            Login
          </button>
        </form>
        <p className="form-divider">or login with</p>
        <button type="button" className="btn btn-outline btn-block btn-google">
          <span className="google-g">G</span> Google
        </button>
        <p className="form-footer">
          <a href="#" className="link" onClick={(e) => { e.preventDefault(); onNavigate('welcome'); }}>
            Back
          </a>
        </p>
      </div>
    </section>
  );
}

export default LoginPage;
