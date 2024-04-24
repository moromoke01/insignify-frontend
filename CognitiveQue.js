import React, { useState, useEffect } from 'react';
import logo from '../../../Assets/logo.png'
import "./testStyle.css";

const CognitiveQuestions = () => {
  const [cognitiveAbilityQuestions, setCognitiveAbilityQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  useEffect(() => {
    // Fetch cognitive ability questions from the backend
    fetchCognitiveAbilityQuestions();
  }, []);

  const fetchCognitiveAbilityQuestions = async () => {
    try {
      // Simulate fetching data from a URL
      const response = await fetch('http://localhost:5000/question/questions');
      const data = await response.json();
      // Filter questions by section "Cognitive Abilities"
      const cognitiveQuestions = data.filter(question => question.section === "Cognitive Abilities");
      setCognitiveAbilityQuestions(cognitiveQuestions);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < cognitiveAbilityQuestions.length - 1) {
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

  const currentQuestion = cognitiveAbilityQuestions[currentQuestionIndex];

  return (
    <div className="quiz-container">
             <div className="header">
         <img src ={logo} style={{width:150}} alt="logo"/>
         <h4><b>Section A:Cognitive Ability Questions</b></h4>

         <span>
          <b>59:49</b>
          <button>End Assessment</button></span>
       </div>

      <div className='pagination'>
        {cognitiveAbilityQuestions.map((question, index) => (
          <div
              key={index}
              className={`pagination-circle ${answeredQuestions[index] ? 'answered' : 'unanswered'}`}  onClick={() => setCurrentQuestionIndex(index)}>

                {index + 1}
              </div>
        ))}
      </div>
      
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

export default CognitiveQuestions;
