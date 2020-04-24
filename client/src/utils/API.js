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
    return axios.post("/api/users/create/" + req.userName, {"email": req.email, "userName": req.userName, "password": req.password});
  },
  login: function(req) {
    return axios.get("/api/users/" + req.userName);
  }
};
