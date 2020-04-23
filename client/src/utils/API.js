import axios from "axios";

export default {
  // Next section is for country axios calls
  getCountries: function() {
    return axios.get("/api/countries");
  },
  switchCountry: function(name) {
    return axios.get("/api/countries/specificCountry/" + name);
  },
  createUser: function(req) {
    return axios.get("/api/users/create/" + req.userName);
  },
  login: function(req) {
    return axios.get("/api/users/" + req.userName);
  }
};
