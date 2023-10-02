// Nel componente Quiz.js
import React, { useState } from 'react';

function Quiz({ questions }) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [showResults, setShowResults] = useState(false);

    const handleAnswerOptionClick = (answerOption) => {
        // Aggiungi la risposta dell'utente all'array userAnswers
        setUserAnswers([...userAnswers, answerOption]);

        if (answerOption.isCorrect) {
            setCorrectAnswers(correctAnswers + 1);
        }

        const nextQuestion = currentQuestionIndex + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestionIndex(nextQuestion);
        } else {
            setShowResults(true);
        }
    };

    return (
        <div className='boxRisultati'>
            {showResults ? (
                <div className='results-section'>
                    <div>Hai risposto correttamente a {correctAnswers} su {questions.length} domande!</div>
                        {/* // Nel riepilogo */}
                        <ul className="review-list">
                            {questions.map((question, index) => (
                                <li key={index}>
                                    <span className="question-label">Domanda:</span> {question.question}
                                    <br />
                                    <span className="answer-label">Tua risposta:</span> {userAnswers[index].text}
                                    <span className={userAnswers[index].isCorrect ? "" : "incorrect"}>
                                        {userAnswers[index].isCorrect ? "Corretta" : "Errata"}
                                    </span>
                                </li>
                            ))}
                        </ul>
                </div>
            ) : (
                <>
                    <div className='question-section'>
                        <span>Domanda {currentQuestionIndex + 1}</span>
                        <div>{questions[currentQuestionIndex].question}</div>
                    </div>
                    <div className='answer-section'>
                        {questions[currentQuestionIndex].options.map((option, index) => (
                            <button key={index} onClick={() => handleAnswerOptionClick(option)}>
                                {option.text}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default Quiz;
