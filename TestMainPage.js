import React, { useState } from 'react';
import CognitiveQue from './CognitiveQue';
import PersonalityTrait from './PersonalityTrait';
import CreativityQue from './CreativityQue';
import Aptitude from './AptitudeQue';
import SkillQue from './SkillQue';

// Import all your question components

function TestPage() {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [responses, setResponses] = useState({});
  const [learningTrack, setLearningTrack] = useState(null); // State to hold predicted learning track
  const totalQuestions = 5; // Total number of questions

  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleResponseChange = (questionNumber, response) => {
    setResponses({ ...responses, [questionNumber]: response });
  };

  const handleSubmit = async () => {
    try {
      const modelURL = 'https://cors-anywhere.herokuapp.com/https://psychometric-test-ai-model-11ccf748825c.herokuapp.com/predict';
 // Replace with your deployed model URL
      const response = await fetch(modelURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ responses })
      });
      const data = await response.json();
      console.log('Predicted learning track:', data.learningTrack);
      setLearningTrack(data.learningTrack); // Set predicted learning track in state
    } catch (error) {
      console.error('Error predicting learning track:', error);
    }
  };

  return (
    <div className='testMainPage'>
      {currentQuestion === 1 && <CognitiveQue onChange={response => handleResponseChange(1, response)} />}
      {currentQuestion === 2 && <PersonalityTrait onChange={response => handleResponseChange(2, response)} />}
      {currentQuestion === 3 && <CreativityQue onChange={response => handleResponseChange(3, response)} />}
      {currentQuestion === 4 && <Aptitude onChange={response => handleResponseChange(4, response)} />}
      {currentQuestion === 5 && <SkillQue onChange={response => handleResponseChange(5, response)} />}
      {/* Render all your question components */}
      
      {currentQuestion < totalQuestions ? (
        <button className="nexted-section" onClick={handleNext}>Next Section</button>
      ) : (
        <>
          <button className="nexted-section" onClick={handleSubmit}>Submit</button>
          {learningTrack && <p>Predicted Learning Track: {learningTrack}</p>}
        </>
      )}
    </div>
  );
}

export default TestPage;
