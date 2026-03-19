import React, { useState } from 'react';
import BottomNav from '../../components/BottomNav';

function PrivacyPage({ onNavigate }) {
  const [privateAccount, setPrivateAccount] = useState(true);
  const [showCloset, setShowCloset] = useState(true);
  const [outfitSharing, setOutfitSharing] = useState(true);
  const [communityMessages, setCommunityMessages] = useState(true);

  return (
    <section className="screen screen-privacy">
      <header className="edit-profile-header">
        <button
          type="button"
          className="profile-back"
          aria-label="Back"
          onClick={() => onNavigate('profile')}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="edit-profile-title">Privacy</h1>
      </header>

      <div className="privacy-content">
        <div className="notifications-card">
          <label className="notifications-row">
            <span className="notifications-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </span>
            <span className="notifications-label">Private Account</span>
            <span className="notifications-toggle-wrap">
              <input
                type="checkbox"
                className="notifications-toggle"
                checked={privateAccount}
                onChange={() => setPrivateAccount((v) => !v)}
                aria-label="Private Account"
              />
            </span>
          </label>
          <label className="notifications-row">
            <span className="notifications-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
            </span>
            <span className="notifications-label">Show Closet Publicly</span>
            <span className="notifications-toggle-wrap">
              <input
                type="checkbox"
                className="notifications-toggle"
                checked={showCloset}
                onChange={() => setShowCloset((v) => !v)}
                aria-label="Show Closet Publicly"
              />
            </span>
          </label>
          <label className="notifications-row">
            <span className="privacy-row-icon-placeholder" aria-hidden="true" />
            <span className="notifications-label">Outfit Sharing</span>
            <span className="notifications-toggle-wrap">
              <input
                type="checkbox"
                className="notifications-toggle"
                checked={outfitSharing}
                onChange={() => setOutfitSharing((v) => !v)}
                aria-label="Outfit Sharing"
              />
            </span>
          </label>
          <label className="notifications-row">
            <span className="notifications-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </span>
            <span className="notifications-label">Community Messages</span>
            <span className="notifications-toggle-wrap">
              <input
                type="checkbox"
                className="notifications-toggle"
                checked={communityMessages}
                onChange={() => setCommunityMessages((v) => !v)}
                aria-label="Community Messages"
              />
            </span>
          </label>
        </div>

        <h2 className="privacy-section-title">Security</h2>
        <div className="notifications-card">
          <button type="button" className="privacy-link-row">
            <span className="notifications-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </span>
            <span className="notifications-label">Change Password</span>
            <span className="profile-list-arrow" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </span>
          </button>
          <button type="button" className="privacy-link-row">
            <span className="notifications-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </span>
            <span className="notifications-label">Two-Factor Auth</span>
            <span className="profile-list-arrow" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      <BottomNav activeId="profile" onNavigate={onNavigate} />
    </section>
  );
}

export default PrivacyPage;
