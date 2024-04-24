import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Verification.css';
import email from "../../Assets/gmail-icon.png";

const VerificationPage = () => {
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
  
  const handleChange = (index, event) => {
    const newCode = [...verificationCode];
    newCode[index] = event.target.value;
    setVerificationCode(newCode);
  };

  const handleVerify = () => {
    const code = verificationCode.join('');
    // Implement verification logic here
    alert(`Verifying code: ${code}`);
  };

  return (
    <div className='body'> 
      <div className='cont flex'>

      <div className='email-image '>
        <img src={email}  alt="email-logo"/>
        <div className='circled-number'>  </div>
      </div>


       <div className='verify-content '>
        <div className="verify-header">
          <h2 className='v-text'>Verify Your Account </h2>
         <p className='text-center'>A mail containing 6-digit code has been sent to your email address. Check your email and inputthe code here to verify account to continue</p>
        </div>
        

        {/* Verification code boxes */}
        <div className="verification-code">
          {verificationCode.map((value, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={value}
              onChange={(e) => handleChange(index, e)}
            />
          ))}
        </div>

        {/* Verify button */}
        <div className="submit-container">
          <button className="submit" onClick={handleVerify}>VERIFY</button>
        </div>

        
      </div>

           
      </div>
    </div>
  );
};

export default VerificationPage;
