import React, {useState} from "react";
import MapChart from "../components/MapChart";
import { Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import API from "../utils/API";

function Profile() {
    const [formObject, setFormObject] = useState({});

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
      };

      //just for testing purposes
      function handleFormSubmit(event) {
          event.preventDefault();
          console.log(formObject.username);
        API.fortesting(formObject.username)
        .then(res => 
          {
              console.log(res.data)
        //   setFormObject(res.data[0])
          }
        )
        .catch(err => console.log(err));
      };

      function editProfile(event) {
          event.preventDefault();
          console.log(formObject)
        API.editProfile(formObject)
        .then(res => 
          {
          alert("Profile successfully updated!")
          }
        )
        .catch(err => console.log(err));
      };

    return (
      <Container fluid>
<Row>
    <h1>Map should appear below:</h1>
<div>
    <MapChart>
        <h3>The map below may be filled in with countries marked different colors</h3>
    </MapChart>
    <h4>Type in your username to see an example</h4>
    <form>
    <Input
                onChange={handleInputChange}
                name="username"
                placeholder="Your username"
              />
                <FormBtn
                onClick={handleFormSubmit}
              >Submit</FormBtn>
              </form>
</div>
  </Row>
             <Row>
             <div><p>Your username is: </p> <Input
                onChange={handleInputChange}
                disabled={true}
                placeholder={formObject.username}
              /></div>
<div><p>Bio: </p> <Input
                onChange={handleInputChange}
                name="bio"
                placeholder={formObject.bio}
              /></div>
              <div><p>Your home country is: </p> <Input
                onChange={handleInputChange}
                name="homeCountry"
                placeholder={formObject.homeCountry}
              /></div>
  <div><p>Countries you've been to: </p> <Input
                onChange={handleInputChange}
                name="placesVisited"
                placeholder={formObject.homeCountry}
              /></div>
               <div><p>Countries you'd like to visit: </p> <Input
                onChange={handleInputChange}
                name="placesFuture"
                placeholder={formObject.placesFuture}
              /></div>
               </Row>
  <FormBtn
                     onClick={editProfile}
                    ><p>Edit then Submit</p></FormBtn>
      </Container>
    );
    };

export default Profile;