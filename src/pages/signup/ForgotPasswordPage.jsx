import React, { useState } from 'react';
import { HeaderLogo } from '../../components/Logo';

function ForgotPasswordPage({ onNavigate }) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onNavigate('login');
  };

  return (
    <section className="screen screen-form screen-forgot">
      <HeaderLogo />
      <div className="form-wrap form-wrap-forgot">
        <h2 className="form-title">Forgot Password</h2>
        <p className="form-instruction">Enter your email to receive a password reset link</p>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-primary btn-block">
            Send reset link
          </button>
        </form>
        <p className="form-footer">
          <a
            href="#"
            className="link link-back"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('login');
            }}
          >
            Back to login
          </a>
        </p>
      </div>
    </section>
  );
}

export default ForgotPasswordPage;
