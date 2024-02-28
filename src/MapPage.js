import React, { useState } from 'react';
import { MapQuestionList } from './MapQuestionList.js';
import { MapAnswerCard } from './MapAnswerCard.js';
import { InteractiveMap } from './InteractiveMap.js';

function MapPage(props) {
    const [allSelections, setAllSelections] = useState([]);
    const [submitted, setSubmitted] = useState([])

    const updateAllSelections = (newValue) => {
        setAllSelections(newValue);
    };

    const updateSubmitted = (newValue) => {
        setSubmitted(newValue);
    };

	return (
		<main>         
            <div className="flex-container-overall">
                <section>
                    <div className="flex-container-leftbar">
                        <MapAnswerCard apartments={props.apartments} allSelections={allSelections} submitted={submitted}/>
                        <MapQuestionList questions={props.questions} updateAllSelections={updateAllSelections} updateSubmitted={updateSubmitted}/>
                    </div>
                </section>
                
                <InteractiveMap />            
            </div>
        </main>
	);
}

export default MapPage;

