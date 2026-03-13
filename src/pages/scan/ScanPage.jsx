import React from 'react';
import BottomNav from '../../components/BottomNav';

function ScanPage({ onNavigate }) {
  return (
    <section className="screen screen-home">
      <div className="home-content">
        <div className="placeholder-page">
          <h2 className="placeholder-title">Scan</h2>
          <p className="placeholder-desc">Scan your outfit to add to your vault or get suggestions.</p>
        </div>
      </div>
      <BottomNav activeId="scan" onNavigate={onNavigate} />
    </section>
  );
}

export default ScanPage;
