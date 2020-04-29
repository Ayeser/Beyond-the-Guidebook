import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import CountryJumbotron from "../components/CountryJumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";


function CountryPage() {
  const [countries, setCountries] = useState();
  const [singleCountry, setCountry] = useState({name:"United States", profilePicture:"https://www.worldatlas.com/r/w480/img/flag/us-flag.jpg"});
  const [formObject, setFormObject] = useState({});
  const [commentsObject, setCommentsObject] = useState({});
  const [questionsObject, setQuestionsObject] = useState({});

  useEffect(() => {
    loadCountries();
    getCountriesPoint();
  },[singleCountry])
  function getCountriesPoint() {
    console.log(singleCountry);
    API.getCountriesPoint(country.name)
      .then(res => 
      
        {
        console.log(res)
          setCountries(res.data)
        }
      )
      .catch(err => console.log(err));

    };
  
  function loadCountries() {
    API.getCountries()
      .then(res => 
        {
        setCountries(res.data)
        }
      )
      .catch(err => console.log(err));
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
      API.getCountriesPoint(name)   
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
    }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  function handleFormSubmitAdvice(event) {
    event.preventDefault();
      return API.saveComment({
        place: singleCountry.name,
        person: formObject.author,
        advice: formObject.comment
      })
        .then(console.log("Comment uploaded"))
        .catch(err => console.log(err));
    };

  function handleFormSubmitQuestion(event) {
    event.preventDefault();
    return API.saveQuestion({
      place: singleCountry.name,
      person: formObject.questioner,
      question: formObject.question
    })
      .then(console.log("Question uploaded"))
      .catch(err => console.log(err));
  };

    return (
      <Container fluid>
<Row>
<CountryJumbotron>
              <h1>{singleCountry.name}</h1>
              <img src={singleCountry.profilePicture} alt="Country Flag" />
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
                    <Link to={"/countries/" + country.name} onClick={() => switchCountry(country.name)}>
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
            <Jumbotron>
              <h1>Culture Box #1</h1>
              <p>{singleCountry.culture}</p>
            </Jumbotron>
            </Col><Col size="md-5 sm-8">
            <Jumbotron>
              <h1>Culture Box #2</h1>
              {singleCountry.description}
            </Jumbotron>
            </Col>
            </Row>
            <Row>
            <Col size="md-5 sm-8">
            <Jumbotron>
              <h1>Culture Box #3</h1>
          
            </Jumbotron>
            </Col>
            <Col size="md-5 sm-8">
            <Jumbotron>
              <h1>Culture Box #4</h1>
            </Jumbotron>
            </Col>
            </Row>
            <Row>
              <Col size="md=5 sm-8">
            <form>
            <h2>What "beyond the guidebook" advice can you offer a prospective traveller to this country?</h2>
              <Input
                onChange={handleInputChange}
                name="author"
                placeholder="Author (required)"

              />
              <TextArea
                onChange={handleInputChange}
                name="comment"
                placeholder="Comment would go here"
              />
              <FormBtn
                disabled={!(formObject.author && formObject.comment)}
                onClick={handleFormSubmitAdvice}
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
                onChange={handleInputChange}
                name="questioner"
                placeholder="Author (required)"

              />
              <TextArea
                onChange={handleInputChange}
                name="question"
                placeholder="Question here"
              />
              <FormBtn
                disabled={!(formObject.questioner && formObject.question)}
                onClick={handleFormSubmitQuestion}
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


export default CountryPage;
