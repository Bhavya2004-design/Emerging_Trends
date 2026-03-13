import React, { useState, useEffect } from 'react';
import {
  SplashPage,
  WelcomePage,
  LoginPage,
  RegisterPage,
  SuccessPage,
  ForgotPasswordPage,
} from './pages/signup';
import { HomePage } from './pages/home';
import { ScanPage } from './pages/scan';
import { VaultPage } from './pages/vault';
import { CommunityPage } from './pages/community';
import { ProfilePage, EditProfilePage, NotificationsPage } from './pages/profile';

const PAGES = {
  splash: 'splash',
  welcome: 'welcome',
  login: 'login',
  register: 'register',
  success: 'success',
  forgot: 'forgot',
  home: 'home',
  scan: 'scan',
  vault: 'vault',
  community: 'community',
  profile: 'profile',
  editProfile: 'editProfile',
  notifications: 'notifications',
};

const SPLASH_DURATION_MS = 4000;

function App() {
  const [page, setPage] = useState(PAGES.splash);

  useEffect(() => {
    if (page !== PAGES.splash) return;
    const t = setTimeout(() => setPage(PAGES.welcome), SPLASH_DURATION_MS);
    return () => clearTimeout(t);
  }, [page]);

  const goTo = (name) => {
    if (PAGES[name]) setPage(PAGES[name]);
  };

  if (page === PAGES.splash) return <SplashPage />;
  if (page === PAGES.welcome) return <WelcomePage onNavigate={goTo} />;
  if (page === PAGES.login) return <LoginPage onNavigate={goTo} />;
  if (page === PAGES.register) return <RegisterPage onNavigate={goTo} />;
  if (page === PAGES.success) return <SuccessPage onNavigate={goTo} />;
  if (page === PAGES.forgot) return <ForgotPasswordPage onNavigate={goTo} />;
  if (page === PAGES.home) return <HomePage onNavigate={goTo} />;
  if (page === PAGES.scan) return <ScanPage onNavigate={goTo} />;
  if (page === PAGES.vault) return <VaultPage onNavigate={goTo} />;
  if (page === PAGES.community) return <CommunityPage onNavigate={goTo} />;
  if (page === PAGES.profile) return <ProfilePage onNavigate={goTo} />;
  if (page === PAGES.editProfile) return <EditProfilePage onNavigate={goTo} />;
  if (page === PAGES.notifications) return <NotificationsPage onNavigate={goTo} />;

  return null;
}

export default App;
