import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import MapChart from "../components/MapChart";
import { Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";

    function UserProfile(props) {
        const [userObject, setUserObject] = useState({newbio: ""})
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
        const { name, value } = event.target;
        setUserObject({...userObject, [name]: value})
      };

      function editProfile(event) {
          console.log("Sending: ",  userObject)
        // API.editProfile(userObject)
        // .then(res => 
        //   console.log(res)
        // )
        // .catch(err => console.log(err));
        // event.preventDefault();
      };

      function deleteProfile(event) {
        event.preventDefault();
          return API.deleteProfile({
            username: {username}
          })
            .then(console.log("Your profile has been deleted from the database!"))
            .catch(err => console.log(err));
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
                value={username}
              /></div>
                       <div><p>Your email is: </p> <Input
                disabled={true}
                value={userObject.email}
              /></div>
              </Row> <Row>
              <div><p>Bio: </p> <Input
                onChange={handleInputChange}
                style={{height: 200}}
                name="bio"
                value={userObject.bio}
                placeholder="Type new bio here"
              /></div>
                            <div><p>Your home country is: </p> <Input
                onChange={handleInputChange}
                name="homeCountry"
                placeholder={JSON.stringify(userObject.homeCountry)}
              /></div>
               </Row>  <Row>
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
                      <DeleteBtn
                         onClick={deleteProfile}
                        ><p>Delete profile completely</p></DeleteBtn> 
      </Container>  
    );
    };

export default UserProfile;