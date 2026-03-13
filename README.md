# Vogue Vault

A wardrobe management web app that lets you organize clothing, get outfit suggestions, and share looks in a community. Built with React and Vite.

## How to run the app

1. **Install dependencies** (first time only):
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```
   Then open the URL shown in the terminal (usually `http://localhost:5173`) in your browser.

3. **Build for production**:
   ```bash
   npm run build
   ```
   Output goes to the `dist/` folder.

4. **Preview the production build**:
   ```bash
   npm run preview
   ```

## File structure

```
Emerging_Trends/
├── index.html              # App entry HTML
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── .gitignore
├── public/                 # Static assets (e.g. logo images)
│
└── src/
    ├── main.jsx             # React root (mounts App, imports global CSS)
    ├── App.jsx              # Router: page state and which screen to show
    ├── styles.css           # Global styles and design tokens
    │
    ├── components/          # Reusable UI
    │   ├── Logo.jsx         # Vogue Vault logo (header, splash variants)
    │   └── BottomNav.jsx    # Bottom navigation bar (Home, Scan, Vault, Community, Profile)
    │
    └── pages/               # Screen components by feature
        ├── signup/          # Auth flow
        │   ├── SplashPage.jsx
        │   ├── WelcomePage.jsx
        │   ├── LoginPage.jsx
        │   ├── RegisterPage.jsx
        │   ├── SuccessPage.jsx
        │   ├── ForgotPasswordPage.jsx
        │   └── index.js     # Re-exports
        │
        ├── home/
        │   ├── HomePage.jsx  # Main dashboard (AI suggestions, quick actions, community)
        │   └── index.js
        │
        ├── scan/
        │   ├── ScanPage.jsx
        │   └── index.js
        │
        ├── vault/
        │   ├── VaultPage.jsx
        │   └── index.js
        │
        ├── community/
        │   ├── CommunityPage.jsx
        │   └── index.js
        │
        └── profile/
            ├── ProfilePage.jsx
            ├── EditProfilePage.jsx
            ├── NotificationsPage.jsx
            └── index.js
```

Navigation is handled in `App.jsx` with a single `page` state; `goTo(name)` switches the active screen. Each page folder’s `index.js` re-exports its page(s) for cleaner imports.
