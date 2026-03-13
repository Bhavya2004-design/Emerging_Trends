import React from 'react';
import { Logo } from '../../components/Logo';

function WelcomePage({ onNavigate }) {
  return (
    <section className="screen screen-welcome">
      <div className="welcome-logo-wrap">
        <Logo alt="Vogue Vault" />
      </div>
      <div className="welcome-actions">
        <button type="button" className="btn btn-outline" onClick={() => onNavigate('register')}>
          Register
        </button>
        <button type="button" className="btn btn-primary" onClick={() => onNavigate('login')}>
          Login
        </button>
      </div>
      <p className="welcome-guest">
        <button type="button" className="link link-guest" onClick={() => onNavigate('home')}>
          Continue as guest
        </button>
      </p>
    </section>
  );
}

export default WelcomePage;
