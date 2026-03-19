import React from 'react';
import BottomNav from '../../components/BottomNav';

function ProfilePage({ onNavigate }) {
  return (
    <section className="screen screen-profile">
      <div className="profile-content">
        <header className="profile-header">
          <button type="button" className="profile-back" aria-label="Back" onClick={() => onNavigate('home')}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
          </button>
          <div className="profile-avatar" aria-hidden="true" />
          <h1 className="profile-name">Maria</h1>
          <p className="profile-tagline">Sustainable fashion lover <span aria-hidden="true">🌿</span></p>
        </header>

        <section className="profile-card profile-stats">
          <div className="profile-stat">
            <span className="profile-stat-value">30</span>
            <span className="profile-stat-label">Closet Items</span>
          </div>
          <div className="profile-stat-divider" aria-hidden="true" />
          <div className="profile-stat">
            <span className="profile-stat-value">26</span>
            <span className="profile-stat-label">Outfit Posted</span>
          </div>
          <div className="profile-stat-divider" aria-hidden="true" />
          <div className="profile-stat">
            <span className="profile-stat-value">120</span>
            <span className="profile-stat-label">Followers</span>
          </div>
        </section>

        <section className="profile-card profile-list-card">
          <h2 className="profile-card-title">My Activity</h2>
          <ul className="profile-list">
            <li>
              <button type="button" className="profile-list-item">
                <span className="profile-list-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
                </span>
                <span>My Vault</span>
                <span className="profile-list-arrow" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                </span>
              </button>
            </li>
            <li>
              <button type="button" className="profile-list-item">
                <span className="profile-list-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                </span>
                <span>Saved Outfits</span>
                <span className="profile-list-arrow" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                </span>
              </button>
            </li>
            <li>
              <button type="button" className="profile-list-item">
                <span className="profile-list-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
                </span>
                <span>Travel Packing</span>
                <span className="profile-list-arrow" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                </span>
              </button>
            </li>
            <li>
              <button type="button" className="profile-list-item">
                <span className="profile-list-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                </span>
                <span>Community Posts</span>
                <span className="profile-list-arrow" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                </span>
              </button>
            </li>
          </ul>
        </section>

        <section className="profile-card profile-list-card">
          <h2 className="profile-card-title">Settings</h2>
          <ul className="profile-list">
            <li>
              <button type="button" className="profile-list-item" onClick={() => onNavigate('editProfile')}>
                <span className="profile-list-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                </span>
                <span>Edit Profile</span>
                <span className="profile-list-arrow" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                </span>
              </button>
            </li>
            <li>
              <button type="button" className="profile-list-item" onClick={() => onNavigate('notifications')}>
                <span className="profile-list-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
                </span>
                <span>Notifications</span>
                <span className="profile-list-arrow" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                </span>
              </button>
            </li>
            <li>
              <button type="button" className="profile-list-item" onClick={() => onNavigate('privacy')}>
                <span className="profile-list-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                </span>
                <span>Privacy</span>
                <span className="profile-list-arrow" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                </span>
              </button>
            </li>
            <li>
              <button type="button" className="profile-list-item" onClick={() => onNavigate('appSettings')}>
                <span className="profile-list-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
                </span>
                <span>App Settings</span>
                <span className="profile-list-arrow" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                </span>
              </button>
            </li>
          </ul>
        </section>
      </div>

      <BottomNav activeId="profile" onNavigate={onNavigate} />
    </section>
  );
}

export default ProfilePage;
