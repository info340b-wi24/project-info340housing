import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FavoriteHousing() {
    const [savedData, setSavedData] = useState([]);

    useEffect(() => {
        const database = getDatabase();
        const notesRef = ref(database, 'notes');

        const fetchData = () => {
            onValue(notesRef, (snapshot) => {
                const data = snapshot.val();
                if (data) {
                    // Convert the object into an array of objects
                    const dataArray = Object.keys(data).map(key => ({ id: key, ...data[key] }));
                    setSavedData(dataArray);
                } else {
                    setSavedData([]);
                }
            });
        };

        // Fetch initial data
        fetchData();

        // Clean up the event listener when the component unmounts
        return () => {
            // Unsubscribe from database changes
        };
    }, []);

    return (
		<section className="saved_row">
			<h2 className="saved_favorite">Favorites ❤️</h2>
			<div className="saved_housing_container">
				<Row xs={1} md={2} lg={4} className="g-4 justify-content-center">
					{savedData.map((item, index) => (
						<Col key={index}>
							<Card className='mx-2 my-2 h-100'>
								<Card.Body>
									<Card.Title>{item.title}</Card.Title>
									<Card.Text>{item.notes}</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			</div>
		</section>
	);
}

export default FavoriteHousing;



{/* <Card className='mx-2 my-2'>
	<Card.Img variant='top' src={houseListImg} alt={houseListImgAlt}/>
	<Card.Body>
		<Card.Title>{houseListTitle}</Card.Title>
		<Card.Text>{houseListAddress}</Card.Text>
		<Link to={"/HousingInfo" + houseInfoPath} className="btn btn-primary">Description</Link>
	</Card.Body>
</Card> */}

{/* <div>
	<section className="apartments">
	<div className="container d-flex flex-column flex-lg-row">
		{filteredHouses.length === 0 ? (
		<p>We're sorry, but there are no apartments matching your search.</p>
		) : (
		filteredHouses
		)}
	</div>
	</section>
</div> */}




{/* <div className="saved_card">
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
    <button className='btn btn-info mt-2' type="submit">Save Notes</button>
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
    <button className='btn btn-info mt-2' type="submit">Save Notes</button>
   </div> */}
//    </div>
//    </section>
  
  
