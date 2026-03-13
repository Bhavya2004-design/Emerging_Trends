import React from 'react';

// Logo in public folder
const LOGO_SRC = '/VV_logo.png';

export function Logo({ small = false, alt = 'Vogue Vault' }) {
  return (
    <div className={`logo-icon logo-icon-img${small ? ' small' : ''}`}>
      <img src={LOGO_SRC} alt={alt} className="logo-img" />
    </div>
  );
}

export function LogoText({ small = false }) {
  return (
    <h1 className={`logo-text${small ? ' small' : ''}`}>
      <span className="logo-vogue">Vogue</span>
      <span className="logo-vault">Vault</span>
    </h1>
  );
}

export function HeaderLogo() {
  return (
    <header className="header-logo">
      <Logo small alt="Vogue Vault" />
    </header>
  );
}

export function SplashLogo() {
  return (
    <div className="splash-logo-wrap">
      <Logo alt="Vogue Vault" />
    </div>
  );
}

export default Logo;
