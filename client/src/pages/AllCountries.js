import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import CountryJumbotron from "../components/CountryJumbotron";
import API from "../utils/API";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Nav from "../components/Nav";
import { Input, TextArea, FormBtn } from "../components/Form";
import "../pages/AllCountries.css"

function AllCountries() {
  const [countries, setCountries] = useState({});
  const [singleCountry, setCountry] = useState({});
  const [formObject, setFormObject] = useState({});
  const [commentsObject, setCommentsObject] = useState({});
  const [questionsObject, setQuestionsObject] = useState({});
  const {name, username, id} = useParams();
  
  useEffect(() => {
    loadCountries();
  }, [name]);

  function loadCountries() {
    API.getCountries()
      .then(res => 
        {
        setCountries(res.data)
        }
      )
      .catch(err => console.log(err));
      switchCountry(name);
  };

  function switchCountry(name) {
    API.switchCountry(name)
      .then(res => setCountry(res.data[0]))
      .catch(err => console.log(err));
      API.loadComments(name)
      .then(res => setCommentsObject(res.data))
      .catch(err => console.log(err));
      API.loadQuestions(name)
      .then(res => setQuestionsObject(res.data))
      .catch(err => console.log(err));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  function handleFormSubmitAdvice(event) {
    event.preventDefault();
      return API.saveComment({
        place: name,
        person: username,
        advice: formObject.advice
      })
        .then(console.log("Comment uploaded"))
        .catch(err => console.log(err));
    };

  function handleFormSubmitQuestion(event) {
    event.preventDefault();
    return API.saveQuestion({
      place: name,
      person: username,
      question: formObject.question
    })
      .then(console.log("Question uploaded"))
      .catch(err => console.log(err));
  };

    return (
      <Container fluid>
              <Nav username={username} id={id} />
<Row>
<CountryJumbotron>
              <div className = "Flag">
              {/* <h1>{singleCountry.name}</h1> */}
              <h1>{name}</h1>
              <img src={singleCountry.profilePicture} alt="Country Flag" />
              </div>
            </CountryJumbotron>
  </Row>
  <Row>
          <Col size="md-2 sm-4">
<form>
  <Input
                onChange={handleInputChange}
                name="place"
                placeholder="Country"
                onKeyPress={event => {
                  if (event.key === 'Enter') {
                    event.preventDefault();
                    switchCountry(formObject.place);
                  }
                }}
              />
              </form>
          
            {countries && countries.length  > 0 ? (
              <List>
                {countries.map(country => (
                  <ListItem key={country.name}>
                    <Link to={"/countries/" + country.name + "/" + username + "/" + id}
                    onClick={() => switchCountry(country.name)}>
                      <strong>
                        {country.name}
                      </strong>
                    </Link>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
<Col size="md-10 sm-8">
<Row>
          <Col size="md-5 sm-8">
            <div className= "CultureboxA">
            <Jumbotron>

            <h1 id='Capital'>Capital city is:</h1>
            <h2>{singleCountry.description}</h2>
        
            </Jumbotron>
            </div>
            </Col><Col size="md-5 sm-8">
            <div className= "CultureboxA Culturebox">
            <Jumbotron>
            <h1>Languages:</h1>
            <h2>{singleCountry.languages}</h2>
            
            </Jumbotron>
            </div>
            </Col>
            </Row>
            <Row>
            <Col size="md-5 sm-8">
              <div className= "Culturebox">
            <Jumbotron>
              <h1>National Animal (or fun fact):</h1>
            <h2>{singleCountry.animal}</h2>
            </Jumbotron>
            </div>
            </Col>
            <Col size="md-5 sm-8">
              <div className= "Culturebox">
            <Jumbotron>
              <h1>Currency:</h1>
            <h2>{singleCountry.currency}</h2>
            </Jumbotron>
            </div>
            </Col>
            </Row>
            <Row>
              <Col size="md=5 sm-8">
            <form>
            <h2>What "beyond the guidebook" advice can you offer a prospective traveller to this country?</h2>
              <Input
                disabled={true}
                value={username}
                name="author"

              />
              <TextArea
                onChange={handleInputChange}
                name="advice"
                placeholder="Type comment here"
              />
              <FormBtn
                disabled={!formObject.advice}
                onClick={function(event) {handleFormSubmitAdvice(event)}}
              >
                Submit Comment
              </FormBtn>
            </form>

            {commentsObject && commentsObject.length  > 0 ? (
              <List>
                {commentsObject.map(comment => (
                  <ListItem key={comment.advice}>
                      <strong>
                        {comment.advice + "     -" + comment.person}
                      </strong>
                  </ListItem>
                ))}
              </List>
            ):(
              <h3>No Results to Display</h3>
            )}
            </Col>
            <Col size="md=5 sm-8">
            <form>
            <h2>Have any questions about the culture of this country?</h2>
              <Input
                  disabled={true}
                  value={username}
                name="questioner"

              />
              <TextArea
                onChange={handleInputChange}
                name="question"
                placeholder="Question here"
              />
              <FormBtn
                disabled={!formObject.question}
                onClick={function(event) {handleFormSubmitQuestion(event)}}
              >
                Submit Question
              </FormBtn>
            </form>
            {questionsObject && questionsObject.length  > 0 ? (
              <List>
                {questionsObject.map(questions => (
                  <ListItem key={questions.question}>
                      <strong>
                        {questions.question + "     -" + questions.person}
                      </strong>
                  </ListItem>
                ))}
              </List>
            ):(
              <h3>No Results to Display</h3>
            )}
            </Col>
            </Row>
</Col>
          </Row> 
      </Container>
    );
  }


export default AllCountries;
