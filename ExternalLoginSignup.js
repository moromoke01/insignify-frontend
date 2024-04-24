import React from 'react';
import { GoogleLogin } from 'react-google-login'; // Import GoogleLogin component from a library like react-google-login
import { MicrosoftLogin } from 'react-microsoft-login'; // Import MicrosoftLogin component from a library like react-microsoft-login
import googleIcon from '../../Assets/Google logo.webp';
import outlookIcon from '../../Assets/Outlook.com_icon_(2012-2019).svg 1.png';

const ExternalLogin = ({ provider }) => {
  // Function to handle Google sign in
  const handleGoogleLogin = (response) => {
    // Implement OAuth flow for Google here
    console.log('Google Login response:', response);
  };

  // Function to handle Outlook sign in
  const handleOutlookLogin = (response) => {
    // Implement OAuth flow for Outlook here
    console.log('Outlook Login response:', response);
  };

  return (
    <div className="icon-link">
      {provider === "Google" && (
        <GoogleLogin
          clientId="YOUR_GOOGLE_CLIENT_ID"
          buttonText={<img src={googleIcon} alt="Google" className="external-logo" />}
          onSuccess={handleGoogleLogin}
          onFailure={handleGoogleLogin} // Handle failure if needed
          cookiePolicy={'single_host_origin'}
        />
      )}
      {provider === "Outlook" && (
        <MicrosoftLogin
          clientId="YOUR_MICROSOFT_CLIENT_ID"
          authCallback={handleOutlookLogin}
          redirectUri="REDIRECT_URI"
          children={<img src={outlookIcon} alt="Outlook" className="external-logo" />}
        />
      )}
    </div>
  );
};

export default ExternalLogin;
