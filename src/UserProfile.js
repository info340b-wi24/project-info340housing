import React from 'react';

function UserProfile() {
  return (
    <div className="saved_container">
      <section className="saved_row">
        <img className="saved_profile_image mt-3" src="/img/user.png" alt="Default Profile" />
        <h1>Username000</h1>
        <p>Gender: Female</p >
        <p>Pronounce: She/Her</p >
        <p>Preferred Location: Seattle, Wa</p >
        <p>Preferences: walking distance, public transit</p >
        <p>Leaser or Subleaser or Both or None: Leaser</p >
      </section>
    </div>
  );
}

export default UserProfile;