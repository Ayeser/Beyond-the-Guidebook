import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

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
          <Marker coordinates={[-101, 53]} fill="#777">
            <text textAnchor="middle" fill="#F53">
              Canada
            </text>
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
            <text textAnchor="middle" fill="#F53">
              USA
            </text>

          </Marker>
          <Marker coordinates={[-103, 25]} fill="#777">
            <text textAnchor="middle" fill="#F53">
              Mexico
            </text>
          </Marker>
        </ComposableMap>
      );
    };

export default MapChart;