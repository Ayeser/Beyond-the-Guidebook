import React from "react";
import MapChart from "../components/MapChart";
import { Row, Container } from "../components/Grid";

function Profile() {


    return (
      <Container fluid>
<Row>
    <h1>Map should appear below:</h1>
<div>
    <MapChart>
        <h3>The map below may be filled in with countries marked different colors</h3>
    </MapChart>
</div>
  </Row>
      </Container>
    );
    };

export default Profile;