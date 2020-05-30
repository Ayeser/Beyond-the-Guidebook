import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import MapChart from "../components/MapChart";
import { Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import Nav from "../components/Nav";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";

    function UserProfile(props) {
        const [userObject, setUserObject] = useState({})
        const {username, id} = useParams();
        const [formObject, setFormObject] = useState({});

        useEffect(() => {
          loadAuthorizedUser(username);
        }, [])

        useEffect(() => {
          fillInCountries();
        })

        function loadAuthorizedUser(username) {
          API.getUserAlreadyAuthorized(username)
          .then(res => setUserObject(res.data[0]))
          .catch(err => console.log(err));
        }

        function fillInCountries() {
          if (userObject.placesVisited === undefined) {
          } else {
            let fillArr = userObject.placesVisited.split(", ")
            for (var i =0;i<fillArr.length;i++) {
              if (document.getElementById(fillArr[i]) === null) {
              } else {
                let newDiv = document.getElementById(fillArr[i])
                newDiv.setAttribute("style", "fill: #FF5722");
              }
            }
          };

          if (userObject.homeCountry === undefined) {
          } else {
            if (document.getElementById(userObject.homeCountry) === null) {
            } else {
              let homeDiv = document.getElementById(userObject.homeCountry)
                homeDiv.setAttribute("style", "fill: blue");
            }
              };

          if (userObject.placesFuture === undefined) {
          } else {
            let fillArr = userObject.placesFuture.split(", ")
            for (var j =0;j<fillArr.length;j++) {
              if (document.getElementById(fillArr[j]) === null) {
              } else {
                let futureDiv = document.getElementById(fillArr[j])
                futureDiv.setAttribute("style", "fill: green");
              }
            }
          };
        }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setUserObject({...userObject, [name]: value})
      };

      function editProfile(event) {
        API.editProfile(userObject)
        .then(setFormObject({submitted: "Your profile has now been updated with these new changes!"}))
        .catch(err => console.log(err));
        event.preventDefault();
        fillInCountries()
      };

      function deleteProfile(event) {
        API.deleteProfile({
            username: userObject.username
          })
            .then(setFormObject({deleted: "Your profile has been deleted from the database!"}))
            .catch(err => console.log(err));
            event.preventDefault();
        };
        
    return (
      <Container fluid>
        <Nav username={username} id={id} />
        <Row>
    <h1 style={{marginLeft:"4.9rem", marginTop: "30px", marginBottom: "30px"}}>Profile Page (including map and user profile)</h1>
    </Row><Row>
<div>
    <MapChart username={username} id={id}>
        <h3>The map below may be filled in with countries marked different colors</h3>
    </MapChart>

</div>
  </Row>
             <Row>
             <div><p style={{marginLeft:"2.9rem"}}>Your username is: </p> <Input
              style={{marginLeft:"2.9rem"}}
                disabled={true}
                value={username}
              /></div>
                       <div><p style={{marginLeft:"2.9rem"}}>Your email is: </p> <Input
                style={{marginLeft:"2.9rem"}}
                disabled={true}
                value={userObject.email}
              /></div>
              </Row> <Row>
              <div><p style={{marginLeft:"2.9rem"}}>Bio: </p> <Input
              style={{marginLeft:"2.9rem"}}
                onChange={handleInputChange}
                name="bio"
                placeholder={userObject.bio}
              /></div>
                            <div><p style={{marginLeft:"2.9rem"}}>Your home country is: </p> <Input
                style={{marginLeft:"2.9rem"}}
                onChange={handleInputChange}
                name="homeCountry"
                placeholder={userObject.homeCountry}
              /></div>
               </Row>  <Row>
  <div><p style={{marginLeft:"2.9rem"}}>Countries you've been to: </p> <Input
  style={{marginLeft:"2.9rem"}}
                onChange={handleInputChange}
                name="placesVisited"
                placeholder={userObject.placesVisited}
              /></div>
                 </Row> <Row>
               <div><p style={{marginLeft:"2.9rem"}}>Countries you'd like to visit: </p> <Input
                style={{marginLeft:"2.9rem"}}
                onChange={handleInputChange}
                name="placesFuture"
                placeholder={userObject.placesFuture}
              /></div>
               </Row><Row>
  <FormBtn
                     onClick={editProfile}
                    ><p>Submit profile changes</p></FormBtn> {formObject.submitted}
                     </Row><Row>
                      <DeleteBtn
                         onClick={deleteProfile}
                        ><p>Delete profile completely</p></DeleteBtn> {formObject.deleted}
                        </Row>
      </Container>  
    );
    };

export default UserProfile;