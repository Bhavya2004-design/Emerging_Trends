import React, { useMemo, useState } from 'react';
import BottomNav from '../../components/BottomNav';

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'travel', label: 'Travel Outfit' },
  { id: 'favourites', label: 'Favourites Outfit' },
  { id: 'work', label: 'Work Outfits' },
];

const INITIAL_OUTFITS = [
  {
    id: '1',
    title: 'Airport Comfort Set',
    meta: 'Travel, Casual',
    category: 'travel',
    image: '/outfits/travel/{21288B67-BAFB-416A-8F8A-3071F5116A43}.png',
    liked: false,
  },
  {
    id: '2',
    title: 'Weekend Carry-On Look',
    meta: 'Travel, Spring',
    category: 'travel',
    image: '/outfits/travel/{5511234C-39CA-409F-B6E1-EBE84A57C271}.png',
    liked: false,
  },
  {
    id: '3',
    title: 'City Tour Denim Fit',
    meta: 'Travel, Day Out',
    category: 'travel',
    image: '/outfits/travel/{89583654-51BD-4496-8AAA-5397093C73B2}.png',
    liked: false,
  },
  {
    id: '4',
    title: 'Resort Transit Fit',
    meta: 'Travel, Light Layers',
    category: 'travel',
    image: '/outfits/travel/{8BE55FC7-0BB4-4E86-8FC8-E732D2E8CAB4}.png',
    liked: true,
  },
  {
    id: '5',
    title: 'Light Packing Fit',
    meta: 'Travel, Minimal',
    category: 'travel',
    image: '/outfits/travel/{B9E17F5A-382D-4D8B-9647-69F73C55DFCF}.png',
    liked: false,
  },
  {
    id: '6',
    title: 'Holiday Denim Combo',
    meta: 'Travel, Weekend',
    category: 'travel',
    image: '/outfits/travel/{BC933C9E-6DE5-4DCE-89C4-DB57825F952E}.png',
    liked: false,
  },
  {
    id: '7',
    title: 'Monday Blazer Set',
    meta: 'Work, Layered',
    category: 'work',
    image: '/outfits/work/{0B16B029-0786-4760-877B-307F28F64461}.png',
    liked: false,
  },
  {
    id: '8',
    title: 'Executive Black Pairing',
    meta: 'Work, Formal',
    category: 'work',
    image: '/outfits/work/{2DC1213F-0758-45C6-89E5-03851E7D14B4}.png',
    liked: false,
  },
  {
    id: '9',
    title: 'Boardroom Neutral Fit',
    meta: 'Work, Professional',
    category: 'work',
    image: '/outfits/work/{4298623B-7B8B-4F80-81C3-9A78FA632CA5}.png',
    liked: false,
  },
  {
    id: '10',
    title: 'Desk Day Classic',
    meta: 'Work, Smart Casual',
    category: 'work',
    image: '/outfits/work/{7D47C79B-1E72-4A68-8257-9D6D6EB83DF7}.png',
    liked: false,
  },
  {
    id: '11',
    title: 'Office Capsule Fit',
    meta: 'Work, Clean Lines',
    category: 'work',
    image: '/outfits/work/{9B2E61E1-D93C-4EDE-8B51-A51AA0375536}.png',
    liked: false,
  },
  {
    id: '12',
    title: 'Conference Ready Look',
    meta: 'Work, Elevated',
    category: 'work',
    image: '/outfits/work/{BA8A0467-38FE-46F6-90DC-CDC20B8FF9ED}.png',
    liked: true,
  },
];

function VaultPage({ onNavigate }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [outfits, setOutfits] = useState(INITIAL_OUTFITS);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredOutfits = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    const byFilter = (() => {
      if (activeFilter === 'favourites') {
        return outfits.filter((outfit) => outfit.liked);
      }
      if (activeFilter === 'all') {
        return outfits;
      }
      return outfits.filter((outfit) => outfit.category === activeFilter);
    })();

    if (!normalizedSearch) {
      return byFilter;
    }

    return byFilter.filter((outfit) => {
      const inTitle = outfit.title.toLowerCase().includes(normalizedSearch);
      const inMeta = outfit.meta.toLowerCase().includes(normalizedSearch);
      return inTitle || inMeta;
    });
  }, [activeFilter, outfits, searchTerm]);

  const outfitCountLabel = filteredOutfits.length === 1 ? '1 result' : `${filteredOutfits.length} results`;

  const favouriteCount = outfits.filter((outfit) => outfit.liked).length;

  const toggleFavourite = (id) => {
    setOutfits((prev) =>
      prev.map((outfit) => (outfit.id === id ? { ...outfit, liked: !outfit.liked } : outfit)),
    );
  };

  const handleSearchToggle = () => {
    setSearchOpen((prev) => {
      if (prev) {
        setSearchTerm('');
      }
      return !prev;
    });
  };

  const clearSearch = () => setSearchTerm('');

  const showSummary = activeFilter === 'all' && !searchTerm.trim();

  return (
    <section className="screen screen-home screen-vault">
      <div className="home-content vault-content">
        <header className="vault-header">
          <h1 className="vault-title">My Vault</h1>
          <div className="vault-header-actions">
            <button
              type="button"
              className={`vault-icon-btn${searchOpen ? ' vault-icon-btn-active' : ''}`}
              aria-label={searchOpen ? 'Close search' : 'Search outfits'}
              onClick={handleSearchToggle}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <line x1="16.65" y1="16.65" x2="21" y2="21" />
              </svg>
            </button>
            <button type="button" className="vault-icon-btn" aria-label="More options">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <circle cx="5" cy="12" r="1.8" />
                <circle cx="12" cy="12" r="1.8" />
                <circle cx="19" cy="12" r="1.8" />
              </svg>
            </button>
          </div>
        </header>

        {searchOpen && (
          <div className="vault-search-wrap">
            <input
              type="search"
              className="vault-search-input"
              placeholder="Search outfits"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
            {searchTerm && (
              <button type="button" className="vault-search-clear" aria-label="Clear search" onClick={clearSearch}>
                ×
              </button>
            )}
          </div>
        )}

        <nav className="vault-filters" aria-label="Outfit filters">
          {FILTERS.map((filter) => (
            <button
              key={filter.id}
              type="button"
              className={`vault-filter-chip${activeFilter === filter.id ? ' vault-filter-chip-active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </nav>

        {searchTerm.trim() && <p className="vault-results-label">{outfitCountLabel}</p>}

        {showSummary && (
          <div className="vault-summary-card" role="status" aria-live="polite">
            <h2 className="vault-summary-title">Closet Summary</h2>
            <p className="vault-summary-meta">{outfits.length} items saved</p>
            <p className="vault-summary-meta">{favouriteCount} favourites</p>
          </div>
        )}

        <section className="vault-grid" aria-label="Saved outfits">
          {filteredOutfits.map((outfit) => (
            <article key={outfit.id} className="vault-card">
              <button
                type="button"
                className="vault-fav-btn"
                aria-label={outfit.liked ? 'Remove from favourites' : 'Add to favourites'}
                onClick={() => toggleFavourite(outfit.id)}
              >
                <span className={outfit.liked ? 'vault-heart vault-heart-liked' : 'vault-heart'}>♥</span>
              </button>
              <img className="vault-card-image" src={outfit.image} alt={outfit.title} loading="lazy" />
              <h3 className="vault-card-title">{outfit.title}</h3>
              <p className="vault-card-meta">{outfit.meta}</p>
            </article>
          ))}
          {filteredOutfits.length === 0 && (
            <div className="vault-empty-state">
              <h3>No outfits found</h3>
              <p>Try another search term or filter.</p>
            </div>
          )}
        </section>
        <div className="vault-bottom-space" aria-hidden="true" />
      </div>
      <BottomNav activeId="vault" onNavigate={onNavigate} />
    </section>
  );
}

export default VaultPage;
