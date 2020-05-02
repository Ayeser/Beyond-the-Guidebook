import axios from "axios";

export default {
  // Next section is for country axios calls
  getCountries: function() {
    return axios.get("/api/countries");
  },
  switchCountry: function(name) {
    return axios.get("/api/countries/specificCountry/" + name);
  },
  loadComments: function(name) {
    return axios.get("/api/users/loadingComments/" + name);
  },
  loadQuestions: function(name) {
    return axios.get("/api/users/loadingQuestions/" + name);
  },
  createUser: function(req) {
    return axios.post("/api/users/create/", {"email": req.email, "username": req.username, "password": req.password});
  },
  getUser: function(username) {
    return axios.get("/api/users/members/" + username);
  },
  getUserAlreadyAuthorized: function(username) {
    return axios.get("/api/users/authorizedMember/" + username);
  },
  login: function(req) {
    return axios.post("/api/users/login/", { "username" : req.username, "password": req.password })
  },

//For testing purposes here is a call to get user info
fortesting: function(username) {
  return axios.get("/api/users/fortesting/" + username);
},
editProfile: function(req) {
  return axios.put("/api/users/editProfile", {"username": req.username, "bio": req.bio, "homeCountry": req.homeCountry, "placesVisited": req.placesVisited, "placesFuture": req.placesFuture});
},
deleteProfile: function(req) {
  return axios.put("/api/users/deleteProfile", {"username": req.username});
},
editBio: function(req) {
  return axios.put("/api/users/editBio", {"username": req.username, "bio": req.bio,});
},

saveComment: function(req) {
  return axios.post("/api/users/saveComment", {"person": req.person, "place": req.place, "advice": req.advice});
},
saveQuestion: function(req) {
  return axios.post("/api/users/saveQuestion", {"person": req.person, "place": req.place, "question": req.advice});
}

};
