import React from 'react';

function FavoriteHousing() {
  return (
    <section className="saved_row">
		<h2 className="saved_favorite">Favorites ❤️</h2>
		<div className="saved_sort">
			<form id="saved_form">
				<div className="filter-container">
					<label htmlFor="sort">Sort by:</label>
					<select id="sort" name="sort">
						<option value="date">Date Added</option>
						<option value="alphabetical">Alphabetical Order</option>
					</select>
				</div>
				<div className="filter-container">
					<label htmlFor="filter">Filter:</label>
					<input type="text" id="filter" name="filter" placeholder="Enter search criteria" />
				</div>
			</form>
		</div>
		<div className="saved_card-container">
			<div className="saved_card">
				<h2>1.</h2>
				<a href="https://liveatnora.com">
					<img className="saved_housing" src="/img/noraapartments.jpg" alt="the interior of the studio that includes the kitchen and tv" />
				</a >
				<h2>Nora Apartment
					<a href="mailto:leasing@liveatnora.com">
						<img className="saved_contact" src="/img/email.png" alt="the email icon" />
					</a >
					<a href="tel:+12067045368">
						<img className="saved_contact" src="/img/phone.png" alt="the phone icon" />
					</a >
				</h2>
				<label htmlFor="notes_1">Notes:</label>
				<textarea id="notes_1" rows="8" cols="32"></textarea>
				<button type="submit">Save Notes</button>
			</div>
			<div className="saved_card">
				<h2>2.</h2>
				<a href="https://www.americancampus.com/student-apartments/wa/seattle/hub-u-district-seattle#faq">
					<img className="saved_housing" src="/img/HUB_UDistrict.jpg" alt="outside of hub apartment complex" />
				</a >
				<h2>Hub U District Apartment
					<a href="mailto:HubUDistrict@americancampus.com">
						<img className="saved_contact" src="/img/email.png" alt="the email icon" />
					</a >
					<a href="tel:+12066392882">
						<img className="saved_contact" src="/img/phone.png" alt="the phone icon" />
					</a >
				</h2>
				<label htmlFor="notes_2">Notes:</label>
				<textarea id="notes_2" rows="8" cols="32"></textarea>
				<button type="submit">Save Notes</button>
			</div>
    	</div>
	</section>

  );
}

export default FavoriteHousing;