const router = require("express").Router();
const db = require("../../models");
const passport = require('passport');
const mongoose = require("mongoose");
const jws = require("jws");
const Users = require('../../models/users'); 
  
const LocalStrategy = require('passport-local').Strategy; 
passport.use(new LocalStrategy(Users.authenticate())); 

router.post('/create', function(req, res) { 
      
    UserNew=new Users({email: req.body.email, username : req.body.username, password : req.body.password }); 
  
          Users.register(UserNew, req.body.password, function(err, users) { 
            if (err) { 
              res.json({success:false, message:"Your account could not be saved. Error: ", err})  
            }else{ 
              res.json({success: true, message: "Your account has been saved"}) 
            } 
          }); 
}); 

router.post('/login', function(req, res, next) {
  passport.authenticate("local", function(err, username, password) {
    if (err) {
      return next(err);
    }
    if (!username) {
      return res.json({status: 500, data: null, message: "Username/Password combination could not be found"});
    }
    if (username.password === req.body.password) {
      return res.json({status: 201, data: username, message: "Profile successfully found"});
    }
  })(req, res, next);
})

router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
})

//Temporarily there is this call to test the profile page
router.get("/members/:username", (req, res) => {
    db.Users
        .find( { "username" : req.params.username } )
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  })


  router.get("/authorizedMember/:username", (req, res) => {
    db.Users
        .find( { "username" : req.params.username } )
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  });

  router.delete("/deleteProfile", (req, res) => {
    db.Users
        .deleteMany(  { "username" : req.body.username } )
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  });

  router.put("/editProfile", (req, res) => {
    db.Users
        .update( {username: req.body.username}, req.body )
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  });

  router.post("/saveComment", (req, res) => {
      db.Comments
      .create(req.body)
      .then(dbCreate => res.json(dbCreate))
      .catch(err => res.status(500).json(err));
});

router.post("/saveQuestion", (req, res) => {
    db.Questions
    .create(req.body)
    .then(dbCreate => res.json(dbCreate))
    .catch(err => res.status(500).json(err));
});

router.get("/loadingComments/:name", (req, res) => {
    db.Comments
        .find( { "place" : req.params.name } )
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  });

  router.get("/loadingQuestions/:name", (req, res) => {
    db.Comments
        .find( { "place" : req.params.name } )
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  })

module.exports = router;

