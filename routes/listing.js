const express=require("express");
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const Listing=require("../models/listing.js");
const multer  = require('multer');
const {storage}=require("../cloudConfig.js");
const upload = multer({storage});
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const { index, RenderNewForm, showListing, createListing, renderEditForm, updateListing, destroyListing } = require("../controllers/listing.js");

router
    .route("/")
    .get(wrapAsync(index))
    .post(
        validateListing,isLoggedIn,
        upload.single("listing[image][url]"),wrapAsync(createListing)
    )   
;

router.get("/new",isLoggedIn,RenderNewForm);

router
    .route("/:id")
    .get(wrapAsync(showListing))
    .put(isLoggedIn,isOwner,upload.single("listing[image][url]"),validateListing,wrapAsync(updateListing))
    .delete(isLoggedIn,isOwner,wrapAsync(destroyListing));
;

router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(renderEditForm));

module.exports=router;
