import React from 'react';

function UserProfile() {
  return (
    <div className="saved_container">
      <section className="saved_row">
        <img className="saved_profile_image mt-3" src="/img/user.png" alt="Default Profile Picture Icon" />
        <h1>Username000</h1>
        <p>Email: <a href="mailto:username000@gmail.com">username000@gmail.com</a ></p >
        <p>Phone: <a href="tel:+12061112222">206-111-2222</a ></p >
        <p>Preferred Location: Seattle, Wa</p >
        <p>Preferences: walking distance, public transit</p >
        <p>Leaser or Subleaser or Both or None: Leaser</p >
      </section>
    </div>
  );
}

export default UserProfile;