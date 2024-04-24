import React, { useState } from 'react';
import "./Auth.css";
import logo from "../../Assets/logo.png";

export default function Signup() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    step1: { fullName: '', email: '', password: '', cpass: '' },
    step2: { gender: '', age: '', education: '', occupation: '', career: '', factor: '' },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const currentStepData = { ...formData[`step${step}`], [name]: value };
    setFormData({ ...formData, [`step${step}`]: currentStepData });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5000/SignupNew', {
        method: 'POST',
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("User successfully registered");
        console.log('User Account successfully created');
        setFormData({
          step1: { fullName: '', email: '', password: '', cpass: '' },
          step2: { gender: '', field6: '', field7: '', field8: '' },
        });
        setStep(1);
        window.location.href = "./Login";
      } else {
        console.log("Account creation failed");
      }
    } catch (error) {
      console.log("fail to create account", error);
    }
  };

  const handleNext = () => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  return (
    <div className="body">
      <div className="auth-cont">
        <div className="inputs-box ">
          <h2 className="auth-headline">
            <b>{step === 1 ? 'Create Account' : 'Continue your Registration'}</b>
          </h2>
          <p className="text-center text-black mb-5">
          {step === 1 ? 'Yayyy? You made it to Insightify. Sign up to create your account and take your career psychometric Test' 
          
          : 'To give you a more accurate result, we will love to know you better. Kindly complete your registration to start your assessment with Insightify'}
            
          </p>

          {step === 1 && (
            <div className="grid grid-cols-2 gap-8 ">
              <div className="auth-input">
                <label>Full Name</label>
                <input type="text" className='w-full' name="fullName" value={formData.step1.fullName} onChange={handleChange} 
                placeholder='John Joe'/>
              </div>
              <div className="auth-input">
                <label>Email Address</label>
                <input type="text" className='w-full'  name="email" value={formData.step1.email} onChange={handleChange} placeholder='johnjoe@example.com'/>
              </div>
              <div className="auth-input">
                <label>Password</label>
                <input type="text" className='w-full'  name="password" value={formData.step1.password} onChange={handleChange} 
                placeholder='********'/>
                <p className='text-red-500 text-base mt-3 font-bold'>At least 8 characters including special Characters</p>
              </div>
              <div className="auth-input">
                <label>Confirm Password</label>
                <input type="text" className='w-full'  name="cpass" value={formData.step1.cpass} onChange={handleChange} 
                placeholder='********'/>
                <p className='text-red-500 text-base mt-3 font-semibold'>At least 8 characters including special Characters</p>
              </div>

              <div className='col-span-2 flex'>
              <p className="text-center text-black">
               <input type="checkbox" value="" className='w-4 h-4 mr-4' />
                I agree with Insightify's term and
                service privacy policy and default notification settings, <a href="/terms" className="text-blue">Read Policy</a>
              </p>
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="grid grid-cols-2 gap-10 text-black mt-5">
              
             <div> <label>What is your gendar?</label>
              <select name="gender" className='block  w-full border border-5-gray py-3 px-4 pr-8 rounded leading tight focus:outline-none ' value={formData.step2.gender} onChange={handleChange}>
                <option value="">Select one</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

              <div>
              <label>What is your age range?</label>
              <select name="age" className='block  w-full border border-5-gray py-3 px-4 pr-8 rounded leading tight focus:outline-none' value={formData.step2.age} onChange={handleChange}>
                <option value="">Select one</option>
                <option value="below 18">below 18 years</option>
                <option value="20-25">18-25 years</option>
                <option value="26-30">26-30 years</option>
                <option value="31-40">26-30 years</option>
                <option value="30-above">30 years-above</option>
              </select>
            </div>

            <div >
              <label>What is your highest qualification?</label>
              <select name="education" className='block  w-full border border-5-gray py-3 px-4 pr-8 rounded leading tight focus:outline-none' value={formData.step2.education} onChange={handleChange}>
              <option value="">Select one</option>
                <option value="undergraduate">undergraduate</option>
                <option value="Graduate">Graduate</option>
                <option value="post-graduate">Post-graduate</option>            
              </select>
            </div>

            <div >
              <label>What is your occupation status?</label>
              <select name="occupation" className='block  w-full border border-5-gray py-3 px-4 pr-8 rounded leading tight focus:outline-none' value={formData.step2.occupation} onChange={handleChange}>
              <option value=""> Select one</option>
                <option value="unemployed">unemployed</option>
                <option value="employed">employed</option>
                <option value="self-employed">self-employed</option>            
              </select>
            </div>

            <div >
              <label>Which of these tech career path interest you?</label>
              <select name="career" className='block  w-full border border-5-gray py-3 px-4 pr-8 rounded leading tight focus:outline-none' value={formData.step2.career} onChange={handleChange}>
              <option value="">Select one</option>
                <option value="frontend development">frontend development</option>
                <option value="backend development">backend development</option>
                <option value="Product management">Product management</option>    
                <option value="Product Design">Product Design</option>     
                <option value="3D Animation-Modeling">3D Animation-Modeling</option>   
                <option value="Data Science">Data Science</option> 
                <option value="Mobile development">Mobile development</option>               
              </select>
            </div>

            <div >
              <label>What factor influences your career choice in Tech?</label>
              <select name="factor" className='block  w-full border border-5-gray py-3 px-4 pr-8 rounded leading tight focus:outline-none' value={formData.step2.factor} onChange={handleChange}>
              <option value="">Select one</option>
                <option value="unemployed">unemployed</option>
                <option value="employed">employed</option>
                <option value="self-employed">self-employed</option>            
              </select>
            </div>

            </div>
          )}
          <button className='submit-btn m-auto mt-5 focus:outline-none' onClick={handleNext}>{step < 2 ? 'Next' : 'Submit'}</button>
        </div>
        <div className="info-bar-right">
          <div className="logoAndTagline">
            <img src={logo} style={{ width: 150 }} alt="logo" />
            <p>...the best online career compass</p>
          </div>
          <div className="auth-info-body">
            <h3>We are glad you are back. Welcome!</h3>
            <p className='font-light'>Already have an account with Insightify? Stay connected with us and log in here</p>
            <button className="auth-btn-1">SIGN IN</button>
          </div>
        </div>
      </div>
    </div>
  );
};
