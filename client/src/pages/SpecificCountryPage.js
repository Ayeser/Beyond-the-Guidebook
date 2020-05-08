import React, { useState, useEffect } from "react";
import CountrySwitchBtn from "../components/CountrySwitchBtn";
import Jumbotron from "../components/Jumbotron";
import CountryJumbotron from "../components/CountryJumbotron";
import API from "../utils/API";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function SpecificCountry(props) {
    const [specificCountry, setCountry] = useState({})
    const {name} = useParams();
    const {profilePicture} = useParams();
    useEffect(() => {
        API.switchCountry(name)
        .then(res => setCountry(res.data))
        .catch(err => console.log(err));
        console.log(name);
    }, [])

    const [countries, setCountries] = useState([])
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
      console.log(name);
      API.switchCountry(name)
        .then(res => setCountry(res.data))
        .catch(err => console.log(err));
      console.log(specificCountry);
    }
  
    function handleInputChange(event) {
      const { name, value} = event.target;
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
                  <Col size="md-6 sm-12">
                    <CountryJumbotron>
                      <h1>{name}</h1>
                      <img src={profilePicture} alt={ name }></img>
                    </CountryJumbotron>
                    {countries.length ? (
                      <List>
                        {countries.map(country => (
                          <ListItem key={country.name}>
                            <Link to={"/countries/" + country.name}>
                              <strong>
                                {country.name}
                              </strong>
                            </Link>
                            <CountrySwitchBtn onClick={() => switchCountry(country.name)} />
                          </ListItem>
                        ))}
                      </List>
                    ) : (
                      <h3>No Results to Display</h3>
                    )}
                  </Col>
                  <Col size="md-6">
                    <Jumbotron>
                      <h1>What advice would you give about visiting this culture?</h1>
                    </Jumbotron>
                    <form>
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
              </Container>
            );
          }
        
        
        export default SpecificCountry;