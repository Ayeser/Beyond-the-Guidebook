import axios from "axios";


export default {
  // Next section is for country axios calls
  getCountries: function () {
    return axios.get("/api/countries");
  },
  switchCountry: function (name) {
    return axios.get("/api/countries/specificCountry/" + name);
  },
  getCountriesPoint: function (singlecountry) {
   console.log(singlecountry)
    return axios.get(
      `https://www.triposo.com/api/20200405/poi.json?tag_labels=cuisine-Pizza&tag_labels=cuisine-Beer&location_id=${singlecountry}&count=10&order_by=score&fields=name,best_for,coordinates,score,id&account=${process.env.REACT_APP_APIID}&token=${process.env.REACT_APP_APIKEY}`
    );
  },
  loadComments: function (name) {
    return axios.get("/api/users/loadingComments/" + name);
  },
  loadQuestions: function (name) {
    return axios.get("/api/users/loadingQuestions/" + name);
  },
  createUser: function (req) {
    return axios.post("/api/users/create/", {
      email: req.email,
      username: req.username,
      password: req.password,
    });
  },
  login: function (req) {
    return axios
      .post("/api/users/login/", {
        username: req.username,
        password: req.password,
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          console.log("Successful signup");
          console.log(response.data.username);
        } else {
          console.log("Signup error");
        }
      })
      .catch((error) => {
        console.log("Signup server error");
        console.log(error);
      });
  },

  //For testing purposes here is a call to get user info
  fortesting: function (username) {
    return axios.get("/api/users/fortesting/" + username);
  },
  editProfile: function (req) {
    return axios.put("/api/users/editProfile", {
      username: req.username,
      bio: req.bio,
      homeCountry: req.homeCountry,
      placesVisited: req.placesVisited,
      placesFuture: req.placesFuture,
    });
  },

  saveComment: function (req) {
    return axios.post("/api/users/saveComment", {
      person: req.person,
      place: req.place,
      advice: req.advice,
    });
  },
  saveQuestion: function (req) {
    return axios.post("/api/users/saveQuestion", {
      person: req.person,
      place: req.place,
      question: req.advice,
    });
  },
};
