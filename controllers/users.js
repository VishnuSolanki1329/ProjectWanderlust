<<<<<<< HEAD
const User = require("../models/user");


module.exports.renderSignupForm = (req, res) => {
    res.render("users/signup.ejs");
}


module.exports.signup = async(req, res) => {
    try {
        let { username, email, password} = req.body;
        const newUser = new User({email, username});
        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser);
        req.login(registeredUser, (err) => {
            if(err) {
                return next();
            }
            req.flash("success", "Welcome to wanderlust!");
            res.redirect("/listings");
        });  
    }   catch(e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
};

module.exports.renderLoginForm = (req, res) => {
    res.render("users/login.ejs");
};

module.exports.login = async (req, res) =>{
    req.flash("success", "Welcome back to wanderlust! You are logged in ");
    res.redirect("/listings");
};

module.exports.logout =  (req, res) => {
    req.logout((err) =>{
        if(err) {
            return next(err);
        }
        req.flash("success", "you are logged out");
        res.redirect("/listings");
    });
=======
const User = require("../models/user");


module.exports.renderSignupForm = (req, res) => {
    res.render("users/signup.ejs");
}


module.exports.signup = async(req, res) => {
    try {
        let { username, email, password} = req.body;
        const newUser = new User({email, username});
        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser);
        req.login(registeredUser, (err) => {
            if(err) {
                return next();
            }
            req.flash("success", "Welcome to wanderlust!");
            res.redirect("/listings");
        });  
    }   catch(e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
};

module.exports.renderLoginForm = (req, res) => {
    res.render("users/login.ejs");
};

module.exports.login = async (req, res) =>{
    req.flash("success", "Welcome back to wanderlust! You are logged in ");
    res.redirect("/listings");
};

module.exports.logout =  (req, res) => {
    req.logout((err) =>{
        if(err) {
            return next(err);
        }
        req.flash("success", "you are logged out");
        res.redirect("/listings");
    });
>>>>>>> 59f73547b03df34273dfaa7c6d4455c0c0482eb2
};