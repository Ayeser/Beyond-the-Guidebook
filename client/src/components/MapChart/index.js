import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";
// import { Link } from "react-router-dom";

  // function MapChart({children}) {
    const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
    
    const MapChart = () => {

      return (
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
                  style={{
                    default: {
                       fill: "#ECEFF1",
                       stroke: "#607D8B",
                       strokeWidth: 0.75,
                       outline: "none",
                    },
                    hover: {
                       fill: "#CFD8DC",
                       stroke: "#607D8B",
                       strokeWidth: 1,
                       outline: "none",
                    },
                    pressed: {
                       fill: "#FF5722",
                       stroke: "#607D8B",
                       strokeWidth: 1,
                       outline: "none",
                    }
                 }}
                />
              ))
            }
          </Geographies>
          <Marker coordinates={[-101, 53]} fill="#FF5722">
            <a href="/countries/Canada" textAnchor="middle" fill="#FF5722">
              <text>Canada</text>
            </a>
            <circle
          cx={0}
          cy={0}
          r={5}
          style={{
            stroke: "#FF5722",
            strokeWidth: 3,
            opacity: 0.9,
          }}
       />
          </Marker>
          <Marker coordinates={[-102, 38]} fill="#777">
          <a href="/countries/United%20States" textAnchor="middle" fill="#FF5722">
              <text>United States</text>
            </a>

          </Marker>
          <Marker coordinates={[-103, 25]} fill="#777">
          <a href="/countries/Mexico" textAnchor="middle" fill="#FF5722">
              <text>Mexico</text>
            </a>
          </Marker>
        </ComposableMap>
      );
    };

export default MapChart