import { useMemo } from 'react';
import './profile-card.css';

const ProfileCard = ({
  avatarUrl = '/profile-photo.jpeg',
  miniAvatarUrl = '/profile-photo.jpeg',
  name = 'Sandesh Yesane',
  title = 'Full Stack Developer & ML Enthusiast',
  handle = 'sandeshyesane996',
  status = 'Available for Opportunities',
  contactText = 'Contact',
  onContactClick
}) => {
  const rootVars = useMemo(
    () => ({
      '--inner-gradient': 'linear-gradient(145deg,#1c2436 0%,#111622 100%)',
      '--grain': 'none',
      '--icon': 'none',
      '--behind-glow-color': 'rgba(125, 190, 255, .5)',
      '--behind-glow-size': '35%'
    }),
    []
  );

  return (
    <div className="pc-card-wrapper" style={rootVars}>
      <div className="pc-behind" />
      <div className="pc-card-shell active">
        <div className="pc-card">
          <div className="pc-inside" />
          <div className="pc-shine" />
          <div className="pc-glare" />

          <div className="pc-content">
            <div className="pc-details">
              <h3>{name}</h3>
              <p>{title}</p>
            </div>
          </div>

          <div className="pc-avatar-content">
            <img className="avatar" src={avatarUrl} alt={name} />
          </div>

          <div className="pc-user-info">
            <div className="pc-user-details">
              <div className="pc-mini-avatar">
                <img src={miniAvatarUrl} alt={name} />
              </div>
              <div className="pc-user-text">
                <span className="pc-handle">@{handle}</span>
                <span className="pc-status">{status}</span>
              </div>
            </div>
            <button className="pc-contact-btn" onClick={onContactClick} type="button">
              {contactText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
