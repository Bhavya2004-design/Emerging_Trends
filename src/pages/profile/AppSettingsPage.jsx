import React, { useState } from 'react';
import BottomNav from '../../components/BottomNav';

function AppSettingsPage({ onNavigate }) {
  const [darkMode, setDarkMode] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogOutClick = () => {
    setShowLogoutModal(true);
  };

  const handleLogOutConfirm = () => {
    setShowLogoutModal(false);
    onNavigate('welcome');
  };

  const handleLogOutCancel = () => {
    setShowLogoutModal(false);
  };

  return (
    <section className="screen screen-app-settings">
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
        <h1 className="edit-profile-title">App Settings</h1>
      </header>

      <div className="app-settings-content">
        <h2 className="app-settings-section-title">General</h2>
        <div className="notifications-card">
          <label className="notifications-row">
            <span className="notifications-icon" aria-hidden="true" />
            <span className="notifications-label">Dark Mode</span>
            <span className="notifications-toggle-wrap">
              <input
                type="checkbox"
                className="notifications-toggle"
                checked={darkMode}
                onChange={() => setDarkMode((v) => !v)}
                aria-label="Dark Mode"
              />
            </span>
          </label>
          <button type="button" className="privacy-link-row">
            <span className="notifications-icon" aria-hidden="true" />
            <span className="notifications-label">Language</span>
            <span className="app-settings-value">English</span>
            <span className="profile-list-arrow" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </span>
          </button>
          <button type="button" className="privacy-link-row">
            <span className="notifications-icon" aria-hidden="true" />
            <span className="notifications-label">Units</span>
            <span className="app-settings-value">Metric</span>
            <span className="profile-list-arrow" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </span>
          </button>
        </div>

        <h2 className="app-settings-section-title">Support</h2>
        <div className="notifications-card">
          <button type="button" className="privacy-link-row">
            <span className="notifications-icon" aria-hidden="true" />
            <span className="notifications-label">Help Center</span>
            <span className="profile-list-arrow" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </span>
          </button>
          <button type="button" className="privacy-link-row">
            <span className="notifications-icon" aria-hidden="true" />
            <span className="notifications-label">Report a Problem</span>
            <span className="profile-list-arrow" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </span>
          </button>
        </div>

        <button type="button" className="btn btn-primary btn-block app-settings-logout" onClick={handleLogOutClick}>
          Log Out
        </button>
      </div>

      <BottomNav activeId="profile" onNavigate={onNavigate} />

      {showLogoutModal && (
        <div className="discard-modal-backdrop" onClick={handleLogOutCancel}>
          <div
            className="discard-modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="logout-modal-title"
            aria-describedby="logout-modal-desc"
          >
            <h2 id="logout-modal-title" className="discard-modal-title">
              Log out?
            </h2>
            <p id="logout-modal-desc" className="discard-modal-desc">
              Are you sure?
            </p>
            <div className="discard-modal-actions">
              <button type="button" className="btn btn-outline discard-modal-btn-cancel" onClick={handleLogOutCancel}>
                Cancel
              </button>
              <button type="button" className="btn btn-primary discard-modal-btn-discard" onClick={handleLogOutConfirm}>
                Log Out
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default AppSettingsPage;
