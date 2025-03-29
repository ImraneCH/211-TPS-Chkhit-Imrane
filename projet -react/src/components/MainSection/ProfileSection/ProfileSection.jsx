import React from "react";
import "./ProfileSection.css";

function ProfileSection({ profile }) {
  return (
    <div className="profile">
      <div className="profile-name-image">
        <img className="profile-image" src={profile.image} alt={`${profile.Prenom} ${profile.Nom}`} />
        <h1 className="profile-user-name">{profile.Prenom} {profile.Nom}</h1>
      </div>
      <div className="profile-bio">
        <p>{profile.bio}</p>
      </div>
      <div className="profile-stats">
        <ul>
          <li>{profile.profileStats.posts} posts</li>
          <li>{profile.profileStats.followers} followers</li>
          <li>{profile.profileStats.following} following</li>
        </ul>
      </div>
    </div>
  );
}

export default ProfileSection;