import React from 'react';
import { HeaderLogo } from '../../components/Logo';

function SuccessPage({ onNavigate }) {
  return (
    <section className="screen screen-success">
      <HeaderLogo />
      <div className="success-content">
        <div className="success-icon" aria-hidden="true">
          <svg viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="36" fill="currentColor" />
            <path
              className="check"
              d="M24 40 L36 52 L56 28"
              stroke="#FFFFFF"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h2 className="success-title">Account Created Successfully</h2>
        <p className="success-subtitle">Welcome to Vogue Vault</p>
        <p className="success-desc">Your smart wardrobe assistant</p>
        {onNavigate && (
          <button
            type="button"
            className="btn btn-primary btn-block success-continue"
            onClick={() => onNavigate('home')}
          >
            Continue
          </button>
        )}
      </div>
    </section>
  );
}

export default SuccessPage;
