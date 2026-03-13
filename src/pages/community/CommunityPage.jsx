import React from 'react';
import BottomNav from '../../components/BottomNav';

function CommunityPage({ onNavigate }) {
  return (
    <section className="screen screen-home">
      <div className="home-content">
        <div className="placeholder-page">
          <h2 className="placeholder-title">Community</h2>
          <p className="placeholder-desc">Discover looks and share your outfits with the community.</p>
        </div>
      </div>
      <BottomNav activeId="community" onNavigate={onNavigate} />
    </section>
  );
}

export default CommunityPage;
