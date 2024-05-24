import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import strawberry from '../Assets/strawberry.png';
import apple from '../Assets/apple.png';
import banana from '../Assets/banana.png';
import orange from '../Assets/orange.png';

const AvatarModal = ({ closeModal, handleSelectAvatar }) => {
  const avatarOptions = [strawberry, apple, orange, banana];

  return (
    <div className="modal-background">
      <div className="modal-content">
        <button className="close-button" onClick={closeModal}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <h2>Select Avatar</h2>
        <div className="avatar-options">
          {avatarOptions.map((avatar, index) => (
            <img
              key={index}
              src={avatar}
              alt={`Avatar ${index}`}
              className="avatar-image"
              onClick={() => handleSelectAvatar(avatar)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvatarModal;
