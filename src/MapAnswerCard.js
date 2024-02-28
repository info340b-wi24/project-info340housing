import React, { useState } from 'react';

//render answer card
export function MapAnswerCard({apartments, allSelections, submitted}) {

    let filterApartments = [
        {
            name: "Elm Hall",
            location: "on-campus",
            lease: "short",
            safety: 3,
            grocery: 4,
            outdatedness: 2
        },
        {
            name: "Hub U District Seattle",
            location: "off-campus",
            term: "long",
            safety: 3,
            grocery: 4,
            outdatedness: 2
        },
        {
            name: "The M Seattle",
            location: "off-campus",
            term: "long",
            safety: 3,
            grocery: 5,
            outdatedness: 1
        }
    ];

    // question 1
    if (allSelections[0] === 'q1_on_campus') {
        filterApartments = apartments.filter(apartment => apartment.location === 'on-campus');
    }
    else if (allSelections[0] === 'q1_off_campus'){
        filterApartments = apartments.filter(apartment => apartment.location === 'off-campus');
    }

    // question 2
    if (allSelections[1] === 'q2_long') {
        filterApartments = filterApartments.filter(apartment => apartment.lease === 'long');
    }
    else if (allSelections[1] === 'q2_short') {
        filterApartments = filterApartments.filter(apartment => apartment.lease === 'short');
    }

    const apartmentsWithScore = filterApartments.map(apartment => {
        // Initialize a variable to store the apartment's score
        let apartmentScore = 0;

        // question 3: safety
        if (allSelections[2] === 'q3_1') {
            apartmentScore += apartment.safety * 0;
        } else if (allSelections[2] === 'q3_2') {
            apartmentScore += apartment.safety * 1;
        } else if (allSelections[2] === 'q3_3') {
            apartmentScore += apartment.safety * 2;
        } else if (allSelections[2] === 'q3_4') {
            apartmentScore += apartment.safety * 3;
        } else if (allSelections[2] === 'q3_5') {
            apartmentScore += apartment.safety * 4;
        }
        // question 4: grocery
        if (allSelections[3] === 'q4_1') {
            apartmentScore += apartment.grocery * 0;
        } else if (allSelections[3] === 'q4_2') {
            apartmentScore += apartment.grocery * 1;
        } else if (allSelections[3] === 'q4_3') {
            apartmentScore += apartment.grocery * 2;
        } else if (allSelections[3] === 'q4_4') {
            apartmentScore += apartment.grocery * 3;
        } else if (allSelections[3] === 'q4_5') {
            apartmentScore += apartment.grocery * 4;
        }
        // question 5: outdate
        if (allSelections[4] === 'q5_1') {
            apartmentScore += apartment.outdatedness * 0;
        } else if (allSelections[4] === 'q5_2') {
            apartmentScore += apartment.outdatedness * 1;
        } else if (allSelections[4] === 'q5_3') {
            apartmentScore += apartment.outdatedness * 2;
        } else if (allSelections[4] === 'q5_4') {
            apartmentScore += apartment.outdatedness * 3;
        } else if (allSelections[4] === 'q5_5') {
            apartmentScore += apartment.outdatedness * 4;
        }


        return { ...apartment, score: apartmentScore };
        
    });

    if (submitted) {
        filterApartments = apartmentsWithScore.sort((a, b) => b.score - a.score);
        filterApartments = filterApartments.slice(0, 3).map(apartment => apartment.name).join(', ');

    }
    else {
        filterApartments = ['Elm Hall', 'Hub U District', 'Lander Hall'].join(', ');
    }

    return (
        <div className="flex-container-text">
            <h1 className="top-heading">Best apartment for YOU! </h1>
            <div className="flex-title">
                <h2 className="result-texts">🔍 Take this survey and we will recommend the best apartment for you!</h2>
                <h2 className="result-texts"> ✅ Your Choices: {filterApartments}!</h2>
            </div>
        </div>
    );
}