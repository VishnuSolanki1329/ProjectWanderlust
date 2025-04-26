<<<<<<< HEAD
const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const userController = require("../controllers/users.js");

router
    .route("/signup")
    .get((userController.renderSignupForm))
    .post(wrapAsync (userController.signup));

router
    .route("/login")
    .get(userController.renderLoginForm)
    .post(
    saveRedirectUrl, 
    passport.authenticate("local", 
    {failureRedirect: '/login', 
    failureFlash: true
    }),
    userController.login
    );

router.get("/logout",userController.logout);

=======
const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const userController = require("../controllers/users.js");

router
    .route("/signup")
    .get((userController.renderSignupForm))
    .post(wrapAsync (userController.signup));

router
    .route("/login")
    .get(userController.renderLoginForm)
    .post(
    saveRedirectUrl, 
    passport.authenticate("local", 
    {failureRedirect: '/login', 
    failureFlash: true
    }),
    userController.login
    );

router.get("/logout",userController.logout);

>>>>>>> 59f73547b03df34273dfaa7c6d4455c0c0482eb2
module.exports = router;