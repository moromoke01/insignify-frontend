import React, { useState, useEffect } from 'react';
import "./testStyle.css";

const AptitudeQuestion = () => {
  const [AptitudeQues, setAptitudeQues] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    // Fetch questions from the backend
    fetchAptitudeQuestions();
  }, []);

  const fetchAptitudeQuestions = async () => {
    try {
      // Simulate fetching data from a URL
      const response = await fetch('http://localhost:5000/question/questions');
      const data = await response.json();
      
      // Filter questions by section"
      const AptitudeQuestions = data.filter(question => question.section === "Aptitude");
      setAptitudeQues(AptitudeQuestions);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < AptitudeQues.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setSelectedOption(''); // Reset selected option when navigating to the next question
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prevIndex => prevIndex - 1);
      setSelectedOption(''); // Reset selected option when navigating to the previous question
    }
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleAnswer = () => {
    const selectedAnswer = selectedOption;
    // Handle user's answer selection
    // Compare selectedAnswer with correctAnswer to determine correctness
    // Update UI to reflect user's choice
  };

  const currentQuestion = AptitudeQues[currentQuestionIndex];

  return (
    <div className="quiz-container">
      <h1>Aptitude Questions</h1>
      <div className="questions">
        {currentQuestion && (
          <div className="question">
            <h4>{currentQuestionIndex + 1}. {currentQuestion.question}</h4>
            <form>
              {currentQuestion.options.map((option, index) => (
                <div key={index}>
                  <input
                    type="radio"
                    id={`option-${index}`}
                    name="option"
                    value={option}
                    checked={selectedOption === option}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor={`option-${index}`}  className="options">{option}</label>
                </div>
              ))}
            </form>
          </div>
        )}

        <div className="bottom-buttons">
          <button className="btn btn-left" onClick={handlePrevious}>Previous</button>
          <button className="btn btn-right" onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default AptitudeQuestion;
