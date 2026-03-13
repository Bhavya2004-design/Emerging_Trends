import React from 'react';
import BottomNav from '../../components/BottomNav';

function HomePage({ onNavigate }) {
  return (
    <section className="screen screen-home">
      <div className="home-content">
        <header className="home-header">
          <div className="home-header-text">
            <p className="home-greeting">Good morning, <span className="home-name">Maria <span className="home-leaf" aria-hidden="true">🌿</span></span></p>
            <p className="home-sub">Ready to style today?</p>
          </div>
          <div className="home-avatar" aria-hidden="true" />
        </header>

        <section className="home-card home-ai-card">
          <h3 className="home-card-title">AI Outfit Suggestion</h3>
          <div className="home-ai-body">
            <div className="home-ai-text">
              <p className="home-ai-desc">Beige jacket + White Shirt + Denim</p>
              <button type="button" className="btn btn-primary btn-view-outfit">View Outfit</button>
            </div>
            <div className="home-ai-preview" aria-hidden="true">
              <div className="home-ai-preview-img" />
            </div>
          </div>
        </section>

        <section className="home-section">
          <h3 className="home-section-title">Quick Actions</h3>
          <div className="home-quick-actions">
            <button type="button" className="home-action-card" onClick={() => onNavigate('scan')}>
              <span className="home-action-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" /></svg>
              </span>
              <span className="home-action-label">Scan Outfit</span>
            </button>
            <button type="button" className="home-action-card" onClick={() => onNavigate('vault')}>
              <span className="home-action-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
              </span>
              <span className="home-action-label">My Vault</span>
            </button>
            <button type="button" className="home-action-card">
              <span className="home-action-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
              </span>
              <span className="home-action-label">Pack for Trip</span>
            </button>
          </div>
        </section>

        <section className="home-section">
          <h3 className="home-section-title">Community Looks</h3>
          <div className="home-community-list">
            <article className="home-community-post">
              <div className="home-post-avatar home-post-avatar-1" />
              <div className="home-post-body">
                <p className="home-post-name">Priya</p>
                <p className="home-post-caption">Love this neutral outfit! Perfect for spring! 🌱</p>
                <div className="home-post-actions">
                  <span className="home-post-stat"><span className="home-icon-heart" aria-hidden="true">♥</span> 45</span>
                  <span className="home-post-stat"><span className="home-icon-comment" aria-hidden="true">💬</span> 12</span>
                </div>
              </div>
              <button type="button" className="home-post-menu" aria-label="More options">⋯</button>
            </article>
            <article className="home-community-post">
              <div className="home-post-avatar home-post-avatar-2" />
              <div className="home-post-body">
                <p className="home-post-name">Jenny</p>
                <p className="home-post-caption">Bringing out my summer dresses! 🌻🌻</p>
                <div className="home-post-actions">
                  <span className="home-post-stat"><span className="home-icon-heart" aria-hidden="true">♥</span> 36</span>
                  <span className="home-post-stat"><span className="home-icon-comment" aria-hidden="true">💬</span> 45</span>
                </div>
              </div>
              <div className="home-post-thumb" aria-hidden="true" />
            </article>
          </div>
        </section>
      </div>

      <BottomNav activeId="home" onNavigate={onNavigate} />
    </section>
  );
}

export default HomePage;
