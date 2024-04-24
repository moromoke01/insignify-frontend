import React, { useState } from "react";
import "./Auth.css";
import logo from "../../Assets/logo.png";

const Signup = () => {
  const [FormData, setFormData] = useState({
    fname: "",
    lname: "",
    gender: "",
    education: "",
    location: "",
    age: "",
    email: "",
    password: "",
  });

  function handleData(e) {
    setFormData((prevDataForm) => {
      return {
        ...prevDataForm,
        [e.target.name]: e.target.value,
      };
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const SentData = {
        fname: FormData.fname,
        lname: FormData.lname,
        gender: FormData.gender,
        location: FormData.location,
        education: FormData.education,
        age: FormData.age,
        email: FormData.email,
        password: FormData.password,
      };

      console.log("Firstname:", FormData.fname);
      console.log("LastName:", FormData.lname);
      console.log("email:", FormData.email);
      console.log("password:", FormData.password);

      console.log(SentData);

      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(SentData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message);
        alert("User successfully registered");
        window.location.href = "./Login";
      } else {
        //if sign-up failed
        const error = await response.json();
        console.log(error.message);
        alert("Sign-up failed");
      }
    } catch (e) {
      console.log(e);
    }

    // Reset form fields
    setFormData({
      fname: "",
      lname: "",
      gender: "",
      location: "",
      education: "",
      age: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="body">
      <div className="auth-cont">
        <div className="inputs-box  ">
          <h2 className="auth-headline">
            <b> Create Account</b>
          </h2>
          <p className="text-center">
            Yayyy? You made it to Insightify. Sign up to create your account and
            take your career psychometric Test
          </p>
          <div className="grid  grid-cols-2 md:grid-cols-1 gap-20">
            <div className="auth-input">
              <label>Name</label>
              <input
                type="text"
                name="fname"
                value={FormData.fname}
                onChange={handleData}
                placeholder="John Joy"
              />
            </div>

            <div className="auth-input">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={FormData.email}
                onChange={handleData}
                placeholder="johnjoy@example.com"
              />
            </div>
          </div>

          {/* <div className='grid  grid-cols-2 gap-8'>
            <div className="auth-input">
              <input type="text"
                     name="gender"
                     value={FormData.gender}
                     onChange={handleData}
                     placeholder='Gender' />
            </div>

            <div className="auth-input">
              <input type="text"
                     name="location"
                     value={FormData.location}
                     onChange={handleData}
                     placeholder='location' />
            </div>
        </div> */}

          {/* <div>
            <div className="auth-input">
              <input type="text"
                     name="education"
                     value={FormData.education}
                     onChange={handleData}
                     placeholder='Level of Education' />
            </div>

            <div className="auth-input">
              <input type="date"
                     name="age"
                     value={FormData.age}
                     onChange={handleData}
                     placeholder='Age' />
            </div> */}

          <div className="grid  grid-cols-2 md:grid-cols-1 gap-20">
            <div className="auth-input">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={FormData.password}
                onChange={handleData}
                placeholder="........"
                required
              />
            </div>

            <div className="auth-input">
              <label>Confirm Password</label>
              <input
                type="password"
                name="cpass"
                value={FormData.cpass}
                onChange={handleData}
                placeholder="......."
                required
              />
            </div>
          </div>

          
            <p className="mt-20">
              <span>Read our policy</span> I agree with Insightify's term and
              service privacy policy and default notification settings
            </p>
            <div
              type="submit"
              key="sign up"
              className="submit-btn mt-5 m-auto"
              onClick={handleSubmit}
            >
              Next
            </div>
          </div>
        

        <div className="info-bar-right ">
          <div className="logoAndTagline">
            <img src={logo} style={{ width: 150 }} alt="logo" />
            <p>...the best online career compass</p>
          </div>
          <div className="auth-info-body">
            <h3>We are glad you are back. Welcome!</h3>
            <p>Already have an account, sign in</p>
            <button className="auth-btn-1">SIGN IN</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
