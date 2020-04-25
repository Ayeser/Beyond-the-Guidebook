const router = require("express").Router();
const db = require("../../models");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


//creates username
router.post("/create", (req, res) => {
  db.Users
  .create( req.body )
  .then(dbCreate => res.json(dbCreate))
      .catch(err => res.status(500).json(err));
});

//below logs in
router.post('/login', (req, res, next) => {
        console.log(req.body)
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('logged in', req.username);
        var userInfo = {
            username: req.user.username
        };
        res.send(userInfo);
    }
);

router.get('/', (req, res, next) => {
    console.log('===== user!!======')
    console.log(req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})

//Edit below to edit the user profile
router.put("/update/:username", (req, res) => {
    db.Users
    .findOneAndUpdate({ username: req.params.username }, req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  });

router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
})

//Temporarily there is this call to test the profile page
router.get("/fortesting/:username", (req, res) => {
    db.Users
        .find( { "username" : req.params.username } )
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  })

  router.put("/editProfile", (req, res) => {
    db.Users
        .update( { username: req.username }, req.body )
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  })

  router.post("/saveComment", (req, res) => {
      db.Comments
      .create (req.body)
      .then(dbCreate => res.json(dbCreate))
      .catch(err => res.status(500).json(err));
});

router.post("/saveQuestion", (req, res) => {
    db.Questions
    .create (req.body)
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

