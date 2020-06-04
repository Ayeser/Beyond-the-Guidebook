import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography
  // Marker
} from "react-simple-maps";
import { useHistory } from "react-router-dom";
    
function MapChartGame(props) {
    var username = props.username;
    var id = props.id;
      const [formObject, setFormObject] = useState({});
      const geoUrl =
      "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
      const history = useHistory();
      
      return (
        <>
        <ComposableMap
          projection="AlbersUSA"
          projectionConfig={{
            translate: [50, 99, 99],
            rotate: [-10, 70, 70],
            scale: 5000,
            width: 1000,
            height: 1000
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

  export default MapChartGame;
