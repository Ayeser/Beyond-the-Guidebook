import React from "react";

function Card(props) {
  return (
    <div className="card" >
      <img src="..." class="card-img-top" alt="..."></img>
      <div class="card-body">
  <h5 class="card-title">{props.title}</h5>
        <p class="card-text"> </p>
         {props.text}
        {/* {/* </p> */}
        <a href="../../index.html" class="btn btn-primary"> */
        {props.countryName} 
        </a>
      </div>
    </div>
  );
}

export default Card;
