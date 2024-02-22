import React, { useState } from 'react';

export function MapQuestionList({ questions }) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [submitted, setSubmitted] = useState(false); // Add submitted state

    const handleNextClick = () => {
        if (!submitted && selectedAnswer !== null) { // Check if not submitted
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
            setSelectedAnswer(null);
        } else if (submitted) {
            alert('You have already submitted the form. Please start a new session if you want to answer again.');
        } else {
            alert('Please select an answer before proceeding to the next question.');
        }
    };

    const handleAnswerSelect = (answerId) => {
        setSelectedAnswer(answerId);
    };

    const currentQuestion = questions[currentQuestionIndex];

    const handleSubmit = () => {
        // Logic to handle form submission
        console.log('Form submitted! Please check out our best recommendation for you :D');
        setSubmitted(true); // Set submitted to true after submission
    };

    return (
        <div className="flex-cards">
            <div key={currentQuestion.id} className="card">
                <h3>{currentQuestion.question}</h3>
                <form>
                    {currentQuestion.answers.map(answer => (
                        <div key={answer.id}>
                            <input 
                                type="radio" 
                                id={answer.id} 
                                name={currentQuestion.id} 
                                value={answer.value} 
                                checked={selectedAnswer === answer.id}
                                onChange={() => handleAnswerSelect(answer.id)} 
                                disabled={submitted} // Disable radio buttons after submission
                            />
                            <label htmlFor={answer.id}>{answer.value}</label>
                        </div>
                    ))}
                </form>
            </div>
            {currentQuestionIndex < questions.length - 1 ? (
                <button onClick={handleNextClick} disabled={submitted}>Next</button>
            ) : (
                <button onClick={handleSubmit}>Submit</button>
            )}
        </div>
    );
}

//render answer card
export function MapAnswerCard() {
    const [topOne, setTopOne] = useState('Elm Hall');
    const [topTwo, setTopTwo] = useState('Hub U District');
    const [topThird, setTopThird] = useState('Lander Desk');
    const [quizCompleted, setQuizCompleted] = useState(false); // Track if quiz is completed

    // Function to calculate recommendation based on user's choices
    const calculateRecommendation = () => {
        // Logic to calculate recommendation based on user's choices
        // You can use weights assigned to different questions and answers
        // For now, let's just return the default recommendations
        return ['Elm Hall', 'Hub U District', 'Lander Desk'];
    };

    return (
        <div className="flex-container-text">
            <h1 className="top-heading">Best apartment for YOU! </h1>
            <div className="flex-title">
                <h2 className="result-texts">🔍 Take this survey and we will recommend the best apartment for you!</h2>
                {/* {quizCompleted ? (
                    <h2 className="result-texts">✅ Your Choices: {topOne}, {topTwo}, {topThird}!</h2>
                ) : (
                    <h2 className="result-texts">✅ Your Choices: Elm Hall, Hub U District, Lander Desk!</h2>
                )} */}
            </div>
        </div>
    );
}

// render google map
export function InteractiveMap() {
  return (
    <section>
        <h3 className="top-heading">Check our Interactive Map!</h3>
        <div className="overall-google-map">
            <iframe src="https://www.google.com/maps/d/embed?mid=1AgOqubSb79vWu7CgVGSAdM1cSizDUso&amp;ehbc=2E312F" height="600" width="600" title="Dubs Housing Interactive Map" aria-label="Dubs Housing Interactive Map"></iframe>
        </div>
    </section>
  );
}

