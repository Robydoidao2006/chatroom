var orm = require("../config/orm.js");

var chatroom = {
    //display all values 
     selectAll: function(callback){
        orm.selectAll("chatrooms", function(res){
            callback(res);
        })
    },

    //updates chatroom status
    updateOne: function(id, callback){
        orm.updateOne("chatrooms", id, callback);
    },

    //create a new chat
    insertOne: function(name, callback){
        orm.insertOne("chatrooms", name, callback);

    }
}

module.exports = chatroom;