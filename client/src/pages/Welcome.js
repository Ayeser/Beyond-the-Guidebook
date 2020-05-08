import React, { useState } from "react";
import CountryJumbotron from "../components/CountryJumbotron";
import WelcomeNav from "../components/WelcomeNav";
import Slider from "../components/Slider";
import API from "../utils/API";
import { Row, Col, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";

const images = [
  'https://i2.wp.com/matthewwester.com/wp-content/uploads/2020/interactiveMap.png',
  "https://i2.wp.com/matthewwester.com/wp-content/uploads/2020/searchableCountries.png"
]

function Welcome() {
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
      <Container fluid>
        <WelcomeNav />
<Row>
<div style={{padding:"30px"}}>
              <h1>Ready for a guidebook that gives you information you really need?</h1>
                <p>Our world is getting smaller and smaller. It's easier than ever to travel and meet persons of other cultures. You don't have time to read through outdated guidebooks, you need relevant and current information from those with firsthand experience! "Beyond the Guidebook" is exactly what you're looking for; after creating a profile you will be able to find cultural guidance and firsthand testimonials for any country in the world. </p>
                </div>
                <h2>Features:</h2>
                </Row><Row>
                <p>*Interactive map that gives a display of countries you've been to and countries you'd like to visit. </p>
                </Row><Row>
                <p>*Searchable database of country culture information. </p>
                </Row><Row>
              <p>*Message boards to ask questions about a country's culture and get firsthand responses from other travelers. </p>
              </Row><Row>
<Slider slides={images}>
</Slider>   
                 </Row>
                <h3>Jump in and start exploring our forums, pick out what countries you'd like to go to, and get all the information you need to enjoy the trip!</h3>
                
            <Row>
                <Col size="md-6 sm-6">
            <form>
            <h1>Create an Account</h1>
            <Input
                onChange={handleInputChange}
                name="createUsername"
                placeholder="Username"

              />
              <Input
                onChange={handleInputChange}
                name="createEmail"
                placeholder="Email"

              />
              <Input
                onChange={handleInputChange}
                name="createPassword"
                placeholder="Password"
              />
              <FormBtn
                disabled={!(formObject.createUsername && formObject.createEmail && formObject.createPassword)}
                onClick={handleFormCreateSubmit}
              >
                Create Account
              </FormBtn>
              {formObject.message}
            </form>
            </Col>
            <Col size="md-6 sm-6">
            <form>
            <h1>or Login to Account</h1>
              <Input
                onChange={handleInputChange}
                name="loginName"
                placeholder="Username"

              />
              <Input
                onChange={handleInputChange}
                name="loginPassword"
                placeholder="Password"
              />
              <FormBtn
                disabled={!(formObject.loginName && formObject.loginPassword)}
                onClick={handleFormLoginSubmit}
              >
                Login
              </FormBtn>
              {formObject.alert}
            </form>
            </Col>
            </Row>
      </Container>
    );
    };

export default Welcome;