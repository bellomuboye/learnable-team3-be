const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

router.get("/", (req, res) => {
    res.send("Welcome to user post page");
});


module.exports = router;
