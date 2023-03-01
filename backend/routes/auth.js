const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// Sign up new user
router.post("/signup", async (req, res) => {
    try {
        // Encrypting password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        
        // Creating new user
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });

        // Adding user to the DB
        const user = await newUser.save();
        res.status(200).json(user);
    } catch(error) {
        res.status(500).json(error);
    }
});

// Login
router.post("/login", async (req, res) => {
    try {
        // No user found
        const user = await User.findOne({email: req.body.email});
        !user && res.status(404).json("User not found!");
        
        // Wrong password
        const validPassword =  await bcrypt.compare(req.body.password, user.password);
        !validPassword && res.status(500).json("Wrong password!");

        res.status(200).json(user);
    } catch(error) {
        res.status(500).json(error);
    }
});

module.exports = router;