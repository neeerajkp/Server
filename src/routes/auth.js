const express = require("express");
const router = express.Router();



router.post("/login", (req, res) => {
    console.log(req.body)

    if (req.body.name == "neeraj") {

        res.send(req.body)
    } else {
        res.send("name is not neeraj")
    }


})

module.exports = router;