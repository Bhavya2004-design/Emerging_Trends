import React from 'react';
import BottomNav from '../../components/BottomNav';

function VaultPage({ onNavigate }) {
  return (
    <section className="screen screen-home">
      <div className="home-content">
        <div className="placeholder-page">
          <h2 className="placeholder-title">My Vault</h2>
          <p className="placeholder-desc">Your wardrobe and saved outfits.</p>
        </div>
      </div>
      <BottomNav activeId="vault" onNavigate={onNavigate} />
    </section>
  );
}

export default VaultPage;
