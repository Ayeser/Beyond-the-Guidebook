import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import MapChart from "../components/MapChart";
import { Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import API from "../utils/API";

    function UserProfile(props) {
        const [userObject, setUserObject] = useState({})
        const {username} = useParams();

        useEffect(() => {
          loadAuthorizedUser(username);
        })

        function loadAuthorizedUser(username) {
          API.getUserAlreadyAuthorized(username)
          .then(res => setUserObject(res.data[0]))
          .catch(err => console.log(err));
        }

    function handleInputChange(event) {
        const { name, inputValue } = event.target;
        setUserObject({...userObject, [name]: inputValue})
      };

      function editProfile(event) {
          console.log("Sending: " + JSON.stringify({"bio" : userObject.newbio}))
        // API.editProfile(userObject)
        // .then(res => 
        //   console.log(res)
        // )
        // .catch(err => console.log(err));
        // event.preventDefault();
      };

    return (
      <Container fluid>
<Row>
    <h1>Map should appear below:</h1>
    </Row><Row>
<div>
    <MapChart>
        <h3>The map below may be filled in with countries marked different colors</h3>
    </MapChart>

</div>
  </Row>
             <Row>
             <div><p>Your username is: </p> <Input
                disabled={true}
                value={JSON.stringify(username)}
              /></div>
                       <div><p>Your email is: </p> <Input
                disabled={true}
                value={JSON.stringify(userObject.email)}
              /></div>
              </Row> <Row>
<div><p>Current Bio: </p> <Input
                name="bio"
                style={{height: 200}}
                disabled={true}
                value={JSON.stringify(userObject.bio)}
              /></div>
              <div><p>Update Bio: </p> <Input
                onInputChange={handleInputChange}
                style={{height: 200}}
                name="newbio"
                placeholder="Type new bio here"
              /></div>
               </Row> <Row>
              <div><p>Your home country is: </p> <Input
                onInputChange={handleInputChange}
                name="homeCountry"
                placeholder={JSON.stringify(userObject.homeCountry)}
              /></div>
                 </Row> <Row>
  <div><p>Countries you've been to: </p> <Input
                onChange={handleInputChange}
                name="placesVisited"
                placeholder={userObject.placesVisited}
              /></div>
                 </Row> <Row>
               <div><p>Countries you'd like to visit: </p> <Input
                onChange={handleInputChange}
                name="placesFuture"
                placeholder={userObject.placesFuture}
              /></div>
               </Row>
  <FormBtn
                     onClick={editProfile}
                    ><p>Submit profile changes</p></FormBtn>
      </Container>
    );
    };

export default UserProfile;