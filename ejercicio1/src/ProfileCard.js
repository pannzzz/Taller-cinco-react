    import React from 'react';
    import './ProfileCard.css';
    import profileIcon from './profile-icon.png'; // Asegúrate de que esta ruta coincida con donde colocaste la imagen

    const ProfileCard = () => {
    return (
        <div className="profile-card">
        <img src={profileIcon} alt="Profile" className="profile-icon" />
        <h2 className="profile-name">Maria Jose Jimenez Diaz</h2>
        <p className="profile-description">
            Ingeniera de software apasionada por el desarrollo web y el diseño uwu.
        </p>
        </div>
    );
    };

    export default ProfileCard;
