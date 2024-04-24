import React, { useState } from 'react';
import './Auth.css';
import logo from '../../Assets/logo.png'

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    fetch('http://localhost:5000/login', {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: "application/json",
      "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({ email, password }),
    })
      .then(response => response.json())
      .then(data => {
        const userId = data.userId;
        console.log(data);
        console.log(userId);
        if (data.message === 'Login successful') {
          localStorage.setItem("userId", data.userId);
          
          alert('Login successful');
          // history('/Home',{ state: { id: email, userId} });
         }else{
          alert('Invalid email or password');
         }
       })
       .catch((e)=>{
        console.log(e);
       })

       //Reset form fields
       setEmail('');
       setPassword('');

}

  return (
    <div className='body'>
      <div className='auth-cont'>
        
        <div className="info-bar">
       <div className='logoAndTagline'> <img src ={logo} style={{width:150}} alt="logo"/>
           <p>...the best online career compass</p></div>

      <div className='auth-info-body'>
           <h3>You are here, Welcome to Insightify!</h3>
           <p>Are you new here? Sign up to create an account with Insightify</p>

           <button className='auth-btn-1'>SIGN UP</button>
      </div>
        </div>
    
    
      <div className="inputs-box">
       <form>
        <h2 className='login-headline '><b> Continue with Insightify </b></h2>
        <p className='text-center text-black'>Already have an account with us? Sign in to stay connected with us and continue to explore</p>

        <div className="auth-input mt-10">
        <label>Email Address</label>
          <input type="email" 
                 value={email}
                 onChange={handleEmailChange}
                 placeholder='johnjoe@example.com' required/>
        </div>

        <div className="auth-input mt-20">
        <label>Password</label>
          <input type="password"
                  value={password} 
                  onChange={handlePasswordChange}
                 placeholder='...........' required />
        </div>

         <div className="forgot-pwd text-right mt-7 font-semibold">Forgot Password?</div>

    <div className="submit-container">
        <div type="submit" key="login" className="submit-btn mt-5" onClick={handleSubmit}>SIGN IN</div>

             </div>
          </form>
      </div>
    
  </div>
    
    </div>
  );
};

export default Login;
