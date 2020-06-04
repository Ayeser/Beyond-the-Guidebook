import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import MapChartGame from "../components/MapChartGame";
import { Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import Nav from "../components/Nav";
import API from "../utils/API";

    function Game(props) {
        const [userObject, setUserObject] = useState({})
        const {username, id} = useParams();
        const [formObject, setFormObject] = useState({});

        useEffect(() => {
          loadAuthorizedUser(username);
        }, [])

        function loadAuthorizedUser(username) {
          API.getUserAlreadyAuthorized(username)
          .then(res => setUserObject(res.data[0]))
          .catch(err => console.log(err));
        }

    // function handleInputChange(event) {
    //     const { name, value } = event.target;
    //     setUserObject({...userObject, [name]: value})
    //   };

        
    return (
      <Container fluid>
        <Nav username={username} id={id} />
        <Row>
    <h1 style={{marginLeft:"4.9rem", marginTop: "30px", marginBottom: "30px"}}>Travel Journalist Game</h1>
    </Row><Row>
<div>
    <MapChartGame username={username} id={id}>

    </MapChartGame>

</div>
  </Row>
             <Row>
             <div><p style={{marginLeft:"2.9rem"}}>Your username is: </p> <Input
              style={{marginLeft:"2.9rem"}}
                disabled={true}
                value={username}
              /></div>
              </Row> 
            
      </Container>  
    );
    };

export default Game;