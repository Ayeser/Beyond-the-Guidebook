import React, { useEffect, useState } from "react";
import Card from "../Card"
import Axios from "axios";

function Display({ children }) {
  const [countryInfo, setCountryInfo] = useState([])
 

  // Load all books and store them with setBooks
  useEffect(() => {
    loadCountryInfo()
  }, [])

  // Loads all books and sets them to books
  function loadCountryInfo() {
   Axios.get("https://www.triposo.com/api/20200405/location.json?id=London&account=U9WVQ7AN&token=ptjfinh02nftbzoenl4007hith7ylhk3")
      .then(res => 
        setCountryInfo(res.data.results)
      )
      .catch(err => console.log(err));
  };
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Beyond Guide Book
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="colllapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                {" "}
                Culture by Country <span class="sr-only">(current)</span>
              </a>
            </li>

          </ul>
        </div>
      </nav>
      <Card title="japan" text="lorem 18" countryName = "Japan"/>

    </div>
  );
}

export default Display;
