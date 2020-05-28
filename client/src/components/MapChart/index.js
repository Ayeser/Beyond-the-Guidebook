import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography
  // Marker
} from "react-simple-maps";
import { useHistory } from "react-router-dom";
    
function MapChart(props) {
    var username = props.username;
    var id = props.id;
      const [formObject, setFormObject] = useState({});
      const geoUrl =
      "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
      const history = useHistory();
      
      return (
        <>
        <p style={{color:"blue", marginLeft:"2.9rem"}}>Your home country</ p>
        <p style={{color:"#FF5722", marginLeft:"2.9rem"}}>Countries you've visited (if spelled how we spell it)</ p>
        <p style={{color:"green", marginLeft:"2.9rem"}}>Countries you'd like to visit</ p>
        <p style={{marginLeft:"2.9rem"}}>{formObject.name}</ p>
        <ComposableMap
          projection="geoNaturalEarth1"
          projectionConfig={{
            rotate: [-10, 0, 0],
            scale: 147,
            width: 980,
            height: 551
          }}
          style={{width:900}}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  id = {geo.properties.NAME_LONG}
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#DDD"
                  stroke="#FFF"
                  onClick={() => history.push("/countries/" + geo.properties.NAME_LONG + "/" + username + "/" + id)}
                  onMouseOver={() => setFormObject({name: "Hovering over: " + geo.properties.NAME_LONG})}
                  style={
                    {
                    default: {
                      //  fill: "#ECEFF1",
                       stroke: "#607D8B",
                       strokeWidth: 0.75,
                       outline: "none",
                    },
                 }}
                />
              ))
            }
          </Geographies>
        </ComposableMap>
        </>
      )
        };

  export default MapChart;
