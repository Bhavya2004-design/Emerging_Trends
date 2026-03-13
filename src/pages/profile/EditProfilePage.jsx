import React, { useState } from 'react';
import BottomNav from '../../components/BottomNav';

const BIO_MAX = 120;

function EditProfilePage({ onNavigate }) {
  const [fullName, setFullName] = useState('Maria');
  const [username, setUsername] = useState('@maria12345');
  const [bio, setBio] = useState('Fashion and travel lover 🌿\nReady ro mix & match!');
  const [gender, setGender] = useState('Female');
  const email = 'maria.smith@gmail.com';

  const handleSave = (e) => {
    e.preventDefault();
    onNavigate('profile');
  };

  const bioCount = bio.length;

  return (
    <section className="screen screen-edit-profile">
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
        <h1 className="edit-profile-title">Edit Profile</h1>
      </header>

      <div className="edit-profile-content">
        <div className="edit-profile-avatar-section">
          <div className="edit-profile-avatar" aria-hidden="true" />
          <p className="edit-profile-display-name">Maria Smith</p>
          <button type="button" className="btn btn-edit-avatar">
            Edit
          </button>
        </div>

        <form className="edit-profile-form" onSubmit={handleSave}>
          <div className="edit-profile-field">
            <label htmlFor="edit-full-name">Full Name</label>
            <input
              id="edit-full-name"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="edit-profile-input"
            />
          </div>

          <div className="edit-profile-field">
            <label htmlFor="edit-username">Username</label>
            <input
              id="edit-username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="edit-profile-input"
            />
          </div>

          <div className="edit-profile-field">
            <label htmlFor="edit-bio">Bio</label>
            <div className="edit-profile-textarea-wrap">
              <textarea
                id="edit-bio"
                value={bio}
                onChange={(e) => setBio(e.target.value.slice(0, BIO_MAX))}
                className="edit-profile-textarea"
                rows={3}
                maxLength={BIO_MAX}
              />
              <span className="edit-profile-char-count" aria-live="polite">
                {bioCount}/{BIO_MAX}
              </span>
            </div>
          </div>

          <div className="edit-profile-field">
            <label htmlFor="edit-gender">Gender</label>
            <div className="edit-profile-select-wrap">
              <select
                id="edit-gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="edit-profile-select"
              >
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Non-binary">Non-binary</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
              <span className="edit-profile-chevron" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </div>
          </div>

          <div className="edit-profile-field">
            <input
              type="email"
              value={email}
              readOnly
              className="edit-profile-input edit-profile-input-readonly"
              aria-label="Email"
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block edit-profile-save">
            Save Changes
          </button>
        </form>
      </div>

      <BottomNav activeId="profile" onNavigate={onNavigate} />
    </section>
  );
}

export default EditProfilePage;
