import React, { useEffect, useState } from "react";
import Card from "../Card"
// import Axios from "axios";
import Api from "../../utils/API";
import {Navbar} from "react-bootstrap"

function Display({ children }) {
  const [Countryinfo, setCountryInfo] = useState([])
 

  // Load all books and store them with setBooks
  useEffect(() => {
    loadCountryInfo()
  }, [])

  // Loads all books and sets them to books
  function loadCountryInfo() {
      Api.getCountriesFlag()
      .then(res => 
        setCountryInfo(res.data.results)
      )
      .catch(err => console.log(err));
  };
  return (
    <div>
  
     <Navbar>

     </Navbar>
      

    </div>
  );
}

export default Display;
