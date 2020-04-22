import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import CountryJumbotron from "../components/CountryJumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function CountryPage() {
  const [countries, setCountries] = useState([])
  const [singleCountry, setCountry] = useState({})
  const [formObject, setFormObject] = useState({})

  useEffect(() => {
    loadCountries()
  }, [])

  function loadCountries() {
    API.getCountries()
      .then(res => 
        setCountries(res.data)
      )
      .catch(err => console.log(err));
  };

  function switchCountry(name) {
    API.switchCountry(name)
      .then(res => setCountry(res.data[0]))
      .catch(err => console.log(err));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Form submitted!");
    // if (formObject.name && formObject.author) {
    //   API.saveComment({
    //     author: formObject.author,
    //     synopsis: formObject.comment
    //   })
    //   //change next line eventually to loadComments()
    //     .then(res => loadCountries())
    //     .catch(err => console.log(err));
    // }
  };

    return (
      <Container fluid>
<Row>
<CountryJumbotron>
              <h1>{singleCountry.name}</h1>
              <img src={singleCountry.profilePicture} alt="Country Flag Picture" />
            </CountryJumbotron>
  </Row>
  <Row>
          <Col size="md-2 sm-4">
            {countries.length ? (
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
              <Col size="md=9 sm-7">
            <form style={{width:"100%"}}>
            <h1>Add a comment for this country</h1>
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
                disabled={!(formObject.author && formObject.title)}
                onClick={handleFormSubmit}
              >
                Submit Comment
              </FormBtn>
            </form>
            </Col>
            </Row>
</Col>
          </Row> 
      </Container>
    );
  }


export default CountryPage;
