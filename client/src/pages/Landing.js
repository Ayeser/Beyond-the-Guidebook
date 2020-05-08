import React, { useState } from "react";
import "./Landing.css";
import API from "../utils/API";

function Landing() {

    const [LoginOrSignup, setLoginOrSignup] = useState(false);


    const [formObject, setFormObject] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  function handleFormCreateSubmit(event) {
    event.preventDefault();
      return API.createUser({
        username: formObject.createUsername,
        email: formObject.createEmail,
        password: formObject.createPassword
      })
        .then(setFormObject({message : "Congratulations, account created! You may now log in."}))
        .catch(err => console.log(err));
    };

  function handleFormLoginSubmit(event) {
    event.preventDefault();
    return API.login({
        username: formObject.loginName,
        password: formObject.loginPassword
      })
      .then(res => {
        if (res.data.status === 500) {
          setFormObject({alert : "**Username/Password cannot be found**"})
        } else if (res.data.status === 201) {
          window.location.replace("/members/" + res.data.data.username + "/" + res.data.data._id)
        }})
        .catch(err => console.log(err));
      }

    return (
        <div className="specific">
        <div className="barry">
        <div className="Button">
          <div id="cbtn" style={{left:LoginOrSignup ? "110px" : "0px"}}></div>
          <button type="button" className="toggle-btn" onClick={function() {setLoginOrSignup(!LoginOrSignup)}}>Log In</button>
          <button type="button" className="toggle-btn" onClick={function() {setLoginOrSignup(!LoginOrSignup)}}>Sign Up</button> 
        </div>
        <form style={{left:LoginOrSignup ? "-400px" : "50px"}} className="inputs">
          <input type="text" onChange={handleInputChange}  name="loginName" className="input-field" placeholder="UserName" required />
          <input type="text" className="input-field" name="loginPassword" onChange={handleInputChange} placeholder="Password" required />
          <input type="checkbox" className="check-box" /><span>Remember Me</span>
          <button type="submit" className="submit-button" disabled={!(formObject.loginName && formObject.loginPassword)}
                onClick={function(event) {handleFormLoginSubmit(event)}}
             >Login</button>
                {formObject.alert}
        </form>
        <form style={{left:!LoginOrSignup ? "-400px" : "50px"}} className="inputs">
          <input type="text" className="input-field" onChange={handleInputChange} name="createUsername" placeholder="UserName" required />
          <input type="email" className="input-field" placeholder="Email" onChange={handleInputChange} name="createEmail" required />
          <input type="text" className="input-field" placeholder="Password" onChange={handleInputChange} name="createPassword" required />
          <input type="checkbox" className="check-box" /><span>I agree to the Terms and Conditions </span>
          <button type="submit" className="submit-button" disabled={!(formObject.createUsername && formObject.createEmail && formObject.createPassword)}
                onClick={function(event) {handleFormCreateSubmit(event)}}>Sign Up</button>
                 {formObject.message}
        </form>
    
      </div>
      
            
      <div className="Paragraph" >
          <p>
          Have you ever wondered what you can learn about the cultures of countries you wish to visit? Do you wish you could get first-hand accounts from locals or travelers who have experienced these cultures first-hand? If so then you have come to the right place. We present to you: Beyond the Guidebook! Our application here is meant to increase and expand your knowledge of the cultures of the world while also allowing you to share about your own culture. Our hope is to be able to spread knowledge that you wouldn't necessarily be able to find on the internet or in a guide book. We would be honored if you would journey with us and go Beyond The Guidebook and see our beautiful world in a different light!
          </p>
      </div>
      </div>
    )
}

export default Landing;