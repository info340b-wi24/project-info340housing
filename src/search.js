import React, { useState, useEffect } from 'react';

export function SearchComponent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [apartmentCards, setApartmentCards] = useState([]);

  useEffect(() => {
    // Ensure that the DOM is loaded before attempting to select elements
    const cards = document.querySelectorAll('.card');
    setApartmentCards(Array.from(cards)); // Convert NodeList to Array
  }, []); // Empty dependency array ensures it only runs once after initial render

  const handleSearchButtonClick = () => {
    const searchQueryLowerCase = searchQuery.toLowerCase();

    console.log(handleSearchButtonClick);

    // Instead of directly manipulating DOM elements, filter the cards based on the search query
    const filteredCards = apartmentCards.filter((card) => {
      const cardTitle = card.querySelector('.card-title').textContent.toLowerCase();
      return cardTitle.includes(searchQueryLowerCase);
    });

    // Update state to reflect filtered cards
    setApartmentCards(filteredCards);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="search-component">
      <div className="col-md-6">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Apartment Name e.g. The M"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>
      <button
        className="btn btn-secondary btn-block"
        onClick={handleSearchButtonClick}
      >
        Search
      </button>
      <div className="container">
        <div className="row">
          {apartmentCards.map((card, index) => (
            <div key={index} className="col-sm-12 col-md-6 col-xl-3 d-flex">
              {card}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
