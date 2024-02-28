import React from 'react';
import UserProfile from './UserProfile';
import FavoriteHousing from './FavoriteHousing';

function SavedPage() {
  return (
        <div class="saved_overall_flex_container">
            <div className="saved_container">
                <UserProfile />
                <FavoriteHousing />
            </div>
        </div>
  );
}

export default SavedPage;