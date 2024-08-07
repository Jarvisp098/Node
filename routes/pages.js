
/*
const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.send("This is the home page");
});

router.get('/about', (req, res) =>{
    res.send("This is the about us page");
});

module.exports = router; */

const express = require('express');
const router = express.Router();

// Home Page Route
router.get('/', (req, res) => {
    res.send("This is the home page");
});

// About Us Page Route
router.get('/about', (req, res) => {
    res.send("This is the about us page");
});

module.exports = router;

