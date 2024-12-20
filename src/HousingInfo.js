import React, { useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { getDatabase, ref, push} from 'firebase/database';

function HousingDuty(props) {
    const duty = props.duty;
    
    return (
        <li>{duty}</li>
    )
}

function HousingOption(props) {
    const navigate = useNavigate();
    const [save, setSave] = useState(false);
    const [notes, setNotes] = useState('');

    const Housing_Duties_Data = [
        "We have on-site Management",
        "We have fitness center with free weights",
        "We have Courtyard Area in our community",
        "We have Package Concierge System for our residents",
        "We have Conference and Study Rooms in the floor"
    ];

    const HousingDutiesList = Housing_Duties_Data.map((duty, index) => {
        return <HousingDuty duty={duty} key={index} />;
    });

    const { housingName, housingdetailImg, housingImgAlt, housingInfo, housingDuties } = props.infosDescr;

    const handleSave = () => {
        setSave(true);
        const database = getDatabase();
        const notesRef = ref(database, 'notes');
    
        // Push the notes content to the database
        push(notesRef, {
            title: housingName,
            notes: notes
        }).then(() => {
            console.log('Notes saved successfully');
            navigate('/saved');
        }).catch(error => {
            console.error('Error saving notes: ', error);
        });
    }

    return (
        <div className="house-info-container">
            <h2 className="house-title">{housingName}</h2>
            <div className="house-image-info">
                <img src={housingdetailImg} alt={housingImgAlt} />
            </div>
            <div className="house-details">
                <h3 className="house-details-title">More Details for Apartment</h3>
                <p className="house-info-paragraph">{housingInfo}</p>
                {housingDuties && <ul className="house-duties-list">{HousingDutiesList}</ul>}
            </div>
            <div className="house-notes-container">
                <div>
                    <label htmlFor="notes_2" className="house-notes-label"> ✏️ Notes 🏷️</label>
                </div>
                <textarea 
                    id="notes_2" 
                    rows="8" 
                    cols="32" 
                    value={notes}
                    placeholder="You can either leave a note about it or save it directly to your favorites! Eg: in King County's 98105, offers 1-3 bedroom options, scenic views, a gym, package service, and study rooms."
                    onChange={(e) => setNotes(e.target.value)}>
                </textarea>
            </div>
            <div className="house-save-button">
                <button className="btn btn-primary" onClick={handleSave} disabled={save}>Favorite</button>
            </div>
        </div>
    );
}

export function InfoDescr(props) {
    
    const Info_Descr_Data = [
        {housingName: "Arista Residences", 
        housingdetailImg: "/img/arista-detail.png", 
        housingImgAlt: "The detail of Inside Arista Apartment", 
        housingInfo: "Nestled in King County and marked by the 98105 ZIP Code, Arista stands as a prominent apartment community within the realm of the Seattle Public Schools attendance zone. Arista is distinguished by its broad selection of floor plans, offering 1-, 2-, and 3-bedroom options to cater to diverse living preferences. Residents can enjoy an array of exceptional amenities, including a rooftop deck that boasts picturesque water views, a modern gym equipped for fitness enthusiasts, and a basketball court for sports aficionados. Perfectly situated at University Village, Arista is enveloped by an iconic neighborhood that is a haven for food lovers with its diverse array of restaurants, alongside a vibrant mix of shops, pubs, and coffee houses, ensuring a rich and fulfilling living experience.",
        housingDuties: true,
        houseInfoPath: "arista-page"},

        {housingName: "Hub U District Seattle",
        housingdetailImg:"/img/hub-detail.png",
        housingImgAlt: "The detail of Inside Hub U District Apartment",
        housingInfo: "Hub U District Seattle provides a modern, vibrant living space with fully furnished studio, 1, 2, 3, and 4 bedroom apartments near the University of Washington. Designed to cater to the lifestyle of its residents, the community boasts an array of amenities including a state-of-the-art fitness center, a rooftop deck complete with BBQ facilities for entertaining, and a convenient pet washing station. This blend of comfort, convenience, and luxury makes it an ideal choice for those seeking a dynamic urban living experience in Seattle, WA.", 
        housingDuties: true,
        houseInfoPath: "hub-page"},

        {housingName: "The M Seattle", 
        housingdetailImg: "/img/the-m-detail.png",
        housingImgAlt: "The detail of Inside The M Apartment",
        housingInfo: "The M, located in the vibrant heart of the U-District within King County and the 98105 ZIP Code, offers a stunning selection of studio, one-, two-, and four-bedroom apartments. Perfectly positioned for both academic pursuits and urban exploration, residents of The M are just steps away from their classes and a diverse array of entertainment options. This apartment community, served by the Seattle Public Schools attendance zone, represents the epitome of convenience and style in Seattle's bustling educational and cultural hub.", 
        housingDuties: true,
        houseInfoPath: "them-page"},

        {housingName: "The Standard at Seattle", 
        housingdetailImg: "/img/standard-detail.png", 
        housingImgAlt: "The detail of Inside Standard Apartment",
        housingInfo: "Discover the epitome of comfort, design, and quality living at The Standard at Seattle, situated in the vibrant University District of Seattle, King County. With its location in the 98105 ZIP Code and under the Seattle Public Schools attendance zone, this apartment community is an ideal choice for those seeking an exceptional living environment. The professional leasing team is eager to assist you in finding your ideal residence, ensuring a seamless transition to your new home. As a distinguished UW off-campus housing option, The Standard at Seattle is crafted to enhance the college experience, offering a blend of luxurious interior features and an array of community amenities. Positioned adjacent to the University of Washington campus, it provides unparalleled convenience for students. The community showcases a diverse selection of floor plans, ranging from studios to spacious 1-, 2-, 4-, and 6-bedroom apartments, designed to accommodate various living preferences and styles. Experience the new standard of living at The Standard at Seattle, where every detail is tailored to exceed your expectations.", 
        housingDuties: true,
        houseInfoPath: "standard-page"}
    ];

    const { id } = useParams();
    const selectedInfo = Info_Descr_Data.find(info => info.houseInfoPath === id);

    if (!selectedInfo) {
        return <div>Information not found</div>;
    }

    return <HousingOption infosDescr={selectedInfo} />;

}
