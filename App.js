import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Terms from './Components/terms';
import Result from './Components/Result';
import Home from './Components/Home';
import Quiz from './Components/quiz/quiz';
import { SignupForm, SigninForm } from './Components/LoginSignup/LoginSignup';
import VerificationPage from './Components/LoginSignup/Verification';
import Signup from './Components/LoginSignup/Signup';
import Login from './Components/LoginSignup/Login';
import TestMainPage from './Components/quiz/psychometricTest/TestMainPage';
import TestIntroPage from './Components/quiz/psychometricTest/TestIntroPage';
import Freq from './Components/FAQ/freq';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/register" element={<SignupPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/verify" element={<VerificationPage />} />
          <Route path="/terms" element={<Terms/>} />
          <Route path="/Signup" element={<Signup/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/TestMainPage" element={<TestMainPage/>} />
          <Route path="/TestIntroPage" element={<TestIntroPage/>} />
          <Route path="/faq" element={<Freq/>} />
        </Routes>
      </Router>
    </div>
  );
}

const SignupPage = () => (
  <>
    <SignupForm className="signup-heading" />
  </>
);

const SigninPage = () => (
  <>
    <SigninForm className="signin-heading" />
  </>
);

export default App;
