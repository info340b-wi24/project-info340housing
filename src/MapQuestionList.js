import React, { useState } from 'react';

export function MapQuestionList({ questions, updateAllSelections, updateSubmitted }) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));
    const [submitted, setSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleNextClick = () => {
        if (!submitted && selectedAnswers[currentQuestionIndex] !== null) {
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
            setErrorMessage('');
        } else if (submitted) {
            setErrorMessage('You have already submitted the form. Please start a new session if you want to answer again.');
        } else {
            setErrorMessage('Please select an answer first!');
        }
    };

    const handleAnswerSelect = (answerId) => {
        const updatedSelectedAnswers = [...selectedAnswers];
        updatedSelectedAnswers[currentQuestionIndex] = answerId;
        setSelectedAnswers(updatedSelectedAnswers);
        setErrorMessage('');
    };

    const currentQuestion = questions[currentQuestionIndex];

    const handleSubmit = () => {
        setSubmitted(true);
        updateAllSelections(selectedAnswers.filter(answer => answer !== null));
        updateSubmitted(true);
    };

    // just extract from return
    const answerElements = currentQuestion.answers.map(answer => (
        <div key={answer.id}>
            <input 
                type="radio" 
                id={answer.id} 
                name={currentQuestion.id} 
                value={answer.value} 
                checked={selectedAnswers[currentQuestionIndex] === answer.id}
                onChange={() => handleAnswerSelect(answer.id)} 
                disabled={submitted}
            />
            <label htmlFor={answer.id}>{answer.value}</label>
        </div>
    ));

    return (
        <div className="flex-cards">
            <div key={currentQuestion.id}>
                <p>{currentQuestion.question}</p >
                <form>
                    {answerElements} 
                </form>
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p >}
            {submitted && (
                <div>
                    <p className='mt-2'> 🎉Thank you for submitting!</p >
                    <p>The best apartment for you are shown above!</p >
                </div>
            )}
            {!submitted && ( 
                currentQuestionIndex < questions.length - 1 ? (
                    <button className='btn btn-light mt-2' onClick={handleNextClick} disabled={submitted}>Next</button>
                ) : (
                    <button className='btn btn-success mt-2' onClick={handleSubmit}>Submit</button>
                )
            )}
        </div>
    );
}