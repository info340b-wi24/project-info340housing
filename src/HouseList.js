import Card from 'react-bootstrap/Card';
// import SearchBar from './SearchBar.js';
import { Link } from 'react-router-dom';
import { useState } from 'react';


function HouseList(props) {

    const houseListTitle = props.houseListTitle;
    const houseListAddres = props.houseListAddres;
    const houseListImg = props.houseListImg;
    const houseListImgAlt = props.houseListImgAlt;
    const houseInfoPath = props.houseInfoPath;

    return (
        <Card className='mx-2 my-2'>
            <Card.Img variant='top' src={houseListImg} alt={houseListImgAlt}/>
            <Card.Body>
                <Card.Title>{houseListTitle}</Card.Title>
                <Card.Text>{houseListAddres}</Card.Text>
                <Link to={houseInfoPath} className="btn btn-dark">Description</Link>
            </Card.Body>
        </Card>
    )
}

function find(input, titlesList) {
    return titlesList.filter(str => str.includes(input));
}

export function HouseLists(props) {
    const [userInput, setUserInput] = useState('');

    const House_Data = [
        {houseListTitle: "Arista Residences", houseListAddres: "Apartment Address: 4715 25th Ave NE, Seattle, WA 98105", 
        houseListImg: "/img/Arista.png", houseListImgAlt: "The Arista Apartment in Seattle at UV",
        houseInfoPath: "/arista-page"},

        {houseListTitle: "Hub U District Seattle", houseListAddres: "Apartment Address: 5000 University Way NE, Seattle, WA 98105", 
        houseListImg: "/img/HubU.png", houseListImgAlt: "The Hub Apartment in Seattle at U District",
        houseInfoPath: "/hub-page"},

        {houseListTitle: "The M Seattle", houseListAddres: "Apartment Address: 4700 Brooklyn Ave NE, Seattle, WA 98105", 
        houseListImg: "/img/TheM.png", houseListImgAlt: "The M Apartment in Seattle near U District",
        houseInfoPath: "/them-page"},

        {houseListTitle: "The Standard at Seattle", houseListAddres: "Apartment Address: 4220 12th Ave NE, Seattle, WA 98105", 
        houseListImg: "/img/standard.png", houseListImgAlt: "The Standard Apartment in Seattle near west campus of UW",
        houseInfoPath: "/standard-page"}
    ];

    const windowArray = House_Data.filter((window) => {
        const lowercaseUserInput = userInput.toLowerCase();
        return window.houseListTitle.toLowerCase().includes(lowercaseUserInput);
      }).map((window) => (
        <HouseList
          key={window.houseListTitle}
          houseListTitle={window.houseListTitle}
          houseListAddres={window.houseListAddres}
          houseListImg={window.houseListImg}
          houseListImgAlt={window.houseListImgAlt}
          houseInfoPath={window.houseInfoPath}
        />
      ));
      
      // return (
      //   <div>
      //     <SearchBar userInput={userInput} setUserInput={setUserInput} />
      //     <section id="final apartment">
      //       <div className="container d-flex flex-column flex-lg-row">
      //         {windowArray.length === 0 ? (
      //           <p>We're sorry, but there are no apartments matching your search.</p>
      //         ) : (
      //           windowArray
      //         )}
      //       </div>
      //     </section>
      //   </div>
      // );
}