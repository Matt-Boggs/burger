let express = require("express");
let burger = require("../models/burger.js")

// Create router for app, and export router at the end of file
let router = express.Router()

router.get("/",(req,res)=>{
    burger.selectAll((data)=>{
        let object = {
            burgers: data
        };
        res.render("index",object)
    });
});

// router.post("",(req,res)=>{


//     res.json({key: value})
// });

// router.put("",(req,res)=>{

// })

module.exports = router