var express = require("express");
var router = express.Router();
var chatroom = require("../models/chatroom.js");

//routers index/homepage
router.get("/", function(req, res){
    chatroom.selectAll(function(Chatroom_data){
        console.log(Chatroom_data);
        res.render("index", {Chatroom_data});

    })
})

//route to update
router.put("/chatrooms/update", function(req, res){
    chatroom.updateOne(req.body.chatroom_id, function(result){
        console.log(result);
        res.redirect("/");
    });
});

//route to create a burger
router.post("/chatrooms/create", function(req, res){
    chatroom.insertOne(req.body.chatroom_name, function(result){
        res.redirect("/");
    });
});

module.exports = router;



