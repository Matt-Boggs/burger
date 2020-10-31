let express = require("express");
let burger = require("../models/burger.js")

// Create router for app, and export router at the end of file
let router = express.router()

router.get("/",(req,res)=>{


    res.render("index",object)
});

router.post("",(req,res)=>{


    res.json({key: value})
});

router.put("",(req,res)=>{

})

module.exports = router