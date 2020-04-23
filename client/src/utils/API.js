import axios from "axios";

export default {
  // Next section is for country axios calls
  getCountries: function() {
    return axios.get("/api/countries");
  },
  switchCountry: function(name) {
    return axios.get("/api/countries/specificCountry/" + name);
  },
  getCountriesFlag: function(name){
    return axios.get(`https://www.triposo.com/api/20200405/location.json?id=${name}&account=${process.env.REACT_APP_APIID}&token=${process.env.REACT_APP_APIKEY}`)

  },
};
