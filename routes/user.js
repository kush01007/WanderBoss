const express=require("express");
const passport = require("passport");
const router=express.Router();
const User = require("../models/user.js");
const wrapAsync=require("../utils/wrapAsync.js");
const { saveRedirectUrl } = require("../middleware.js");
const { signup, renderSignup, renderLogin, login, logout } = require("../controllers/user.js");

router
    .route("/signup")
    .get(renderSignup)
    .post(wrapAsync(signup))
;

router
    .route("/login")
    .get(renderLogin)
    .post(saveRedirectUrl,    
    passport.authenticate('local', { failureRedirect: '/login',failureFlash: true }),
    wrapAsync(login))
;

router.get("/logout",logout);

module.exports=router;