import React from 'react';
import { Link } from 'react-router-dom';
import './LoginSignup.css';
import googleIcon from '../../Assets/Google logo.webp';
import outlookIcon from '../../Assets/Outlook.com_icon_(2012-2019).svg 1.png';

const InputField = ({ label, type, name, placeholder }) => (
  <div>
    <label htmlFor={name}><strong>{label}</strong></label>
    <input type={type} name={name} autoComplete='off' placeholder={placeholder} className='input' />
  </div>
);

// Signup form component
const SignupForm = ({ setAction }) => {
  // Function to handle sign up submission
  const handleSignup = () => {
    // Implement your sign up logic here
    alert("Sign up successful!");
  };

  return (
    <div className='body'>
      <div className='container'>
        <div className="header">
          <div className="text">Insightify</div>
          <div className="underline"></div>
        </div>
        <div className="signup-heading">
          <h4>Sign up to take your career <br /> psychometric test</h4>
        </div>

        {/* External logo container */}
        <div className="external-logos">
          <a href="https://google.com" className="icon-link"><img src={googleIcon} alt="Google" className="external-logo" /></a>
          <a href="https://outlook.com" className="icon-link"><img src={outlookIcon} alt="Outlook" className="external-logo" /></a>
        </div>

        {/* Divider and OR text */}
        <div className="divider-container">
          <div className="divider"></div>
          <div className="or-text">OR</div>
          <div className="divider"></div>
        </div>

        <div className="inputs">
          <InputField label="Name" type="text" name="name" placeholder="Enter your name" />
          <InputField label="Email Address" type="email" name="email" placeholder="Enter your email" />
          <InputField label="Password" type="password" name="password" placeholder="Enter your password" />
          <div className="password-info">At least 8 characters and special characters</div>
        </div>

        {/* Checkbox for agreeing to terms */}
        <div className="agree-checkbox">
          <input type="checkbox" id="agreeTerms" name="agreeTerms" />
          <label htmlFor="agreeTerms">I agree with Insightify's <Link to="/terms">Terms of Service</Link>,<br/> <Link to="/privacy">Privacy Policy</Link>, and default Settings</label>
        </div>

        <div className="submit-container">
          <button className="submit" onClick={handleSignup}>SIGN UP</button>
        </div>

        <div className="already-have-account">
          Already have an account? <Link to="/signin" onClick={() => setAction("Login")}>Sign in</Link>
        </div>
      </div>
    </div>
  );
};

// Signin form component
const SigninForm = () => {
  // Function to handle sign in submission
  const handleSignin = () => {
    // Implement your sign in logic here
    alert("Sign in successful!");
  };

  return (
    <div className='body'>
      <div className='container'>
        <div className="header">
          <div className="text">Insightify</div>
          <div className="underline"></div>
        </div>
        <div className="signin-heading">
          <h4>Sign in to stay connected with <br /> us and continue to explore</h4>
        </div>
        <div className="inputs">
          <InputField label="Email" type="email" name="email" placeholder="Enter your email" />
          <InputField label="Password" type="password" name="password" placeholder="Enter your password" />
        </div>
        <div className="forgot-password">Forgot Password?</div>

        <div className="submit-container">
          <button className="submit" onClick={handleSignin}>SIGN IN</button>
        </div>

        {/* Divider and OR text */}
        <div className="divider-container">
          <div className="divider"></div>
          <div className="or-text">Continue With:</div>
          <div className="divider"></div>
        </div>

        {/* Google and Outlook image links */}
        <div className="external-logos">
          <a href="https://google.com" className="icon-link"><img src={googleIcon} alt="Google" className="external-logo" /></a>
          <a href="https://outlook.com" className="icon-link"><img src={outlookIcon} alt="Outlook" className="external-logo" /></a>
        </div>

        {/* New User? Sign up link */}
        <div className="already-have-account">
          New User? <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export { SignupForm, SigninForm };
