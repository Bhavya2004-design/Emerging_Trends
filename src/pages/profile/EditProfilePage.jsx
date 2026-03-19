import React, { useState, useRef } from 'react';
import BottomNav from '../../components/BottomNav';

const BIO_MAX = 120;

const INITIAL = {
  fullName: 'Maria',
  username: '@maria12345',
  bio: 'Fashion and travel lover 🌿\nReady ro mix & match!',
  gender: 'Female',
  profileImage: null,
};

function EditProfilePage({ onNavigate }) {
  const [fullName, setFullName] = useState(INITIAL.fullName);
  const [username, setUsername] = useState(INITIAL.username);
  const [bio, setBio] = useState(INITIAL.bio);
  const [gender, setGender] = useState(INITIAL.gender);
  const [profileImage, setProfileImage] = useState(INITIAL.profileImage);
  const [showDiscardModal, setShowDiscardModal] = useState(false);
  const [pendingNavigatePath, setPendingNavigatePath] = useState(null);
  const fileInputRef = useRef(null);
  const email = 'maria.smith@gmail.com';

  const hasChanges =
    fullName !== INITIAL.fullName ||
    username !== INITIAL.username ||
    bio !== INITIAL.bio ||
    gender !== INITIAL.gender ||
    profileImage !== INITIAL.profileImage;

  const handleNavigateAway = (path) => {
    if (hasChanges) {
      setPendingNavigatePath(path);
      setShowDiscardModal(true);
      return;
    }
    onNavigate(path);
  };

  const handleDiscardConfirm = () => {
    if (pendingNavigatePath) onNavigate(pendingNavigatePath);
    setShowDiscardModal(false);
    setPendingNavigatePath(null);
  };

  const handleDiscardCancel = () => {
    setShowDiscardModal(false);
    setPendingNavigatePath(null);
  };

  const handleSave = (e) => {
    e.preventDefault();
    onNavigate('profile');
  };

  const handleEditAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleAvatarFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = () => setProfileImage(reader.result);
    reader.readAsDataURL(file);
    e.target.value = '';
  };

  const bioCount = bio.length;

  return (
    <section className="screen screen-edit-profile">
      <header className="edit-profile-header">
        <button
          type="button"
          className="profile-back"
          aria-label="Back"
          onClick={() => handleNavigateAway('profile')}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="edit-profile-title">Edit Profile</h1>
      </header>

      <div className="edit-profile-content">
        <div className="edit-profile-avatar-section">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="edit-profile-avatar-input"
            aria-label="Upload profile picture"
            onChange={handleAvatarFileChange}
          />
          <div className="edit-profile-avatar" aria-hidden="true">
            {profileImage ? (
              <img src={profileImage} alt="" className="edit-profile-avatar-img" />
            ) : null}
          </div>
          <p className="edit-profile-display-name">Maria Smith</p>
          <button type="button" className="btn btn-edit-avatar" onClick={handleEditAvatarClick}>
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

      <BottomNav activeId="profile" onNavigate={handleNavigateAway} />

      {showDiscardModal && (
        <div className="discard-modal-backdrop" onClick={handleDiscardCancel}>
          <div
            className="discard-modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="discard-modal-title"
            aria-describedby="discard-modal-desc"
          >
            <h2 id="discard-modal-title" className="discard-modal-title">
              Discard changes?
            </h2>
            <p id="discard-modal-desc" className="discard-modal-desc">
              Are you sure you want to discard the changes?
            </p>
            <div className="discard-modal-actions">
              <button
                type="button"
                className="btn btn-outline discard-modal-btn-cancel"
                onClick={handleDiscardCancel}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary discard-modal-btn-discard"
                onClick={handleDiscardConfirm}
              >
                Discard
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default EditProfilePage;
