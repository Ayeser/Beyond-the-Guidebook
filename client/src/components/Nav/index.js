import React from "react";
import {Navbar,Form,FormControl} from "react-bootstrap"


function Nav() {
  return (
    <Navbar>
      Beyond the Guidebook
      <Form>
        <FormControl placeholder="Search for a Country" className="mr-sm-2" />
     
    
      </Form>
    </Navbar>
   
    
  );
}

export default Nav;
