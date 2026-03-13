import React, { useState } from 'react';
import BottomNav from '../../components/BottomNav';

function NotificationsPage({ onNavigate }) {
  const [pushOn, setPushOn] = useState(true);
  const [outfitOn, setOutfitOn] = useState(true);
  const [likeOn, setLikeOn] = useState(true);
  const [commentOn, setCommentOn] = useState(false);

  return (
    <section className="screen screen-notifications">
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
        <h1 className="edit-profile-title">Notifications</h1>
      </header>

      <div className="notifications-content">
        <div className="notifications-card">
          <label className="notifications-row">
            <span className="notifications-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
            </span>
            <span className="notifications-label">Push Notifications</span>
            <span className="notifications-toggle-wrap">
              <input
                type="checkbox"
                className="notifications-toggle"
                checked={pushOn}
                onChange={() => setPushOn((v) => !v)}
                aria-label="Push Notifications"
              />
            </span>
          </label>
          <label className="notifications-row">
            <span className="notifications-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
              </svg>
            </span>
            <span className="notifications-label">Outfit Suggestions</span>
            <span className="notifications-toggle-wrap">
              <input
                type="checkbox"
                className="notifications-toggle"
                checked={outfitOn}
                onChange={() => setOutfitOn((v) => !v)}
                aria-label="Outfit Suggestions"
              />
            </span>
          </label>
          <label className="notifications-row">
            <span className="notifications-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </span>
            <span className="notifications-label">Like Notifications</span>
            <span className="notifications-toggle-wrap">
              <input
                type="checkbox"
                className="notifications-toggle"
                checked={likeOn}
                onChange={() => setLikeOn((v) => !v)}
                aria-label="Like Notifications"
              />
            </span>
          </label>
        </div>

        <div className="notifications-card">
          <label className="notifications-row">
            <span className="notifications-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </span>
            <span className="notifications-label">Comment Alerts</span>
            <span className="notifications-toggle-wrap">
              <input
                type="checkbox"
                className="notifications-toggle"
                checked={commentOn}
                onChange={() => setCommentOn((v) => !v)}
                aria-label="Comment Alerts"
              />
            </span>
          </label>
        </div>
      </div>

      <BottomNav activeId="profile" onNavigate={onNavigate} />
    </section>
  );
}

export default NotificationsPage;
