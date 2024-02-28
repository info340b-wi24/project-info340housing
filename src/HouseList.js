import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import SearchCom from './searchComponet.js';
import { Link } from 'react-router-dom';

function HouseList(props) {
    const { houseListTitle, houseListAddress, houseListImg, houseListImgAlt, houseInfoPath } = props;
    return (
        <Card className='mx-2 my-2'>
            <Card.Img variant='top' src={houseListImg} alt={houseListImgAlt}/>
            <Card.Body>
                <Card.Title>{houseListTitle}</Card.Title>
                <Card.Text>{houseListAddress}</Card.Text>
                <Link to={"/HousingInfo" + houseInfoPath} className="btn btn-primary">Description</Link>
            </Card.Body>
        </Card>
    );
}

export default function HouseLists(props) {
    const [userInput, setUserInput] = useState('');

    const House_Data = [
        {
            houseListTitle: "Arista Residences",
            houseListAddress: "Apartment Address: 4715 25th Ave NE, Seattle, WA 98105",
            houseListImg: "/img/Arista.png",
            houseListImgAlt: "The Arista Apartment in Seattle at UV",
            houseInfoPath: "/arista-page"
        },
        {
            houseListTitle: "Hub U District Seattle",
            houseListAddress: "Apartment Address: 5000 University Way NE, Seattle, WA 98105",
            houseListImg: "/img/HubU.png",
            houseListImgAlt: "The Hub Apartment in Seattle at U District",
            houseInfoPath: "/hub-page"
        },
        {
            houseListTitle: "The M Seattle",
            houseListAddress: "Apartment Address: 4700 Brooklyn Ave NE, Seattle, WA 98105",
            houseListImg: "/img/TheM.png",
            houseListImgAlt: "The M Apartment in Seattle near U District",
            houseInfoPath: "/them-page"
        },
        {
            houseListTitle: "The Standard at Seattle",
            houseListAddress: "Apartment Address: 4220 12th Ave NE, Seattle, WA 98105",
            houseListImg: "/img/standard.png",
            houseListImgAlt: "The Standard Apartment in Seattle near west campus of UW",
            houseInfoPath: "/standard-page"
        }
    ];

    const filteredHouses = House_Data.filter((house) =>
        house.houseListTitle.toLowerCase().includes(userInput.toLowerCase())
    ).map((house) => (
        <HouseList
          key={house.houseListTitle}
          houseListTitle={house.houseListTitle}
          houseListAddress={house.houseListAddress}
          houseListImg={house.houseListImg}
          houseListImgAlt={house.houseListImgAlt}
          houseInfoPath={house.houseInfoPath}
        />
    ));

    return (
        <section>
            <div className="home">     
                {<SearchCom className='search btn btn-secondary btn-block'userInput={userInput} setUserInput={setUserInput} /> }
            </div>

            <div>
                <section className="apartments">
                <div className="container d-flex flex-column flex-lg-row">
                    {filteredHouses.length === 0 ? (
                    <p>We're sorry, but there are no apartments matching your search.</p>
                    ) : (
                    filteredHouses
                    )}
                </div>
                </section>
            </div>

        </section>

    );
}