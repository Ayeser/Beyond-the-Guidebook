import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography
  // Marker
} from "react-simple-maps";
// import { Link } from "react-router-dom";
    
function MapChart() {
      const [formObject, setFormObject] = useState({});
      const geoUrl =
      "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
      
      return (
        <>
        <p>{formObject.name}</ p>
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
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#DDD"
                  stroke="#FFF"
                  onClick={() => console.log(window.location.replace("/countries/" + geo.properties.NAME_LONG))}
                  onMouseOver={() => setFormObject({name: "Hovering over: " + geo.properties.NAME_LONG})}
                  style={{
                    default: {
                       fill: "#ECEFF1",
                       stroke: "#607D8B",
                       strokeWidth: 0.75,
                       outline: "none",
                    },
                    hover: 
                    {
                       fill: "#CFD8DC",
                       stroke: "#607D8B",
                       strokeWidth: 1,
                       outline: "none"
                      },
                    pressed: {
                       fill: "#FF5722",
                       stroke: "#607D8B",
                       strokeWidth: 1,
                       outline: "none"
                    }
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
