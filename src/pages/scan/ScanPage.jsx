import React, { useEffect, useRef, useState } from 'react';
import BottomNav from '../../components/BottomNav';

const DEFAULT_SCAN_IMAGE = '/outfits/travel/{21288B67-BAFB-416A-8F8A-3071F5116A43}.png';

function ScanPage({ onNavigate }) {
  const cameraInputRef = useRef(null);
  const galleryInputRef = useRef(null);
  const objectUrlRef = useRef(null);
  const [previewImage, setPreviewImage] = useState(DEFAULT_SCAN_IMAGE);

  useEffect(
    () => () => {
      if (objectUrlRef.current) {
        URL.revokeObjectURL(objectUrlRef.current);
      }
    },
    [],
  );

  const updatePreviewFromFile = (file) => {
    if (!file) return;
    if (objectUrlRef.current) {
      URL.revokeObjectURL(objectUrlRef.current);
    }
    const nextUrl = URL.createObjectURL(file);
    objectUrlRef.current = nextUrl;
    setPreviewImage(nextUrl);
  };

  const handleCameraChange = (event) => {
    const file = event.target.files?.[0];
    updatePreviewFromFile(file);
    event.target.value = '';
  };

  const handleGalleryChange = (event) => {
    const file = event.target.files?.[0];
    updatePreviewFromFile(file);
    event.target.value = '';
  };

  const openCamera = () => {
    cameraInputRef.current?.click();
  };

  const openGallery = () => {
    galleryInputRef.current?.click();
  };

  const openVaultSearch = () => {
    if (onNavigate) {
      onNavigate('vault');
    }
  };

  return (
    <section className="screen screen-home screen-scan">
      <div className="home-content scan-content">
        <header className="scan-header">
          <button type="button" className="scan-back-btn" aria-label="Back" onClick={() => onNavigate('home')}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </button>
          <div className="scan-title-wrap">
            <h1 className="scan-title">Scan Outfit</h1>
            <p className="scan-subtitle">Tap to scan clothes and add to VogueVault</p>
          </div>
        </header>

        <section className="scan-preview-shell" aria-label="Outfit scan preview">
          <div className="scan-preview-frame">
            <div className="scan-corner scan-corner-tl" aria-hidden="true" />
            <div className="scan-corner scan-corner-tr" aria-hidden="true" />
            <div className="scan-corner scan-corner-bl" aria-hidden="true" />
            <div className="scan-corner scan-corner-br" aria-hidden="true" />
            <img src={previewImage} alt="Scanned outfit preview" className="scan-preview-image" />
          </div>
        </section>

        <p className="scan-helper-text">Not sure ? Start with gallery or searching</p>

        <div className="scan-action-row">
          <button type="button" className="scan-action-card" onClick={openGallery}>
            <span className="scan-action-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <circle cx="9" cy="10" r="1.4" />
                <path d="M5.5 16l4.2-4.2 3.2 3.2 2.4-2.4 3.2 3.4" />
              </svg>
            </span>
            <span className="scan-action-label">Select from Gallery</span>
          </button>
          <button type="button" className="scan-action-card" onClick={openVaultSearch}>
            <span className="scan-action-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="11" cy="11" r="6" />
                <line x1="16" y1="16" x2="21" y2="21" />
              </svg>
            </span>
            <span className="scan-action-label">Search clothing</span>
          </button>
        </div>

        <button type="button" className="scan-main-btn" onClick={openCamera}>
          SCAN ITEM
        </button>

        <input
          ref={cameraInputRef}
          type="file"
          accept="image/*"
          capture="environment"
          className="scan-file-input"
          onChange={handleCameraChange}
        />
        <input
          ref={galleryInputRef}
          type="file"
          accept="image/*"
          className="scan-file-input"
          onChange={handleGalleryChange}
        />
      </div>
      <BottomNav activeId="scan" onNavigate={onNavigate} />
    </section>
  );
}

export default ScanPage;
