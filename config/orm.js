//requiring connection
var connection = require("./connection.js");

//creating a orm and some functions
var orm = {
    //display all data from database
    selectAll: function(tableInput, callback){
        connection.query("SELECT * FROM "+tableInput+ " ORDER BY date DESC;", function(err, result){
            if(err) throw err;
            callback(result)
        })
    },

    //updates all data to database
    updateOne: function(tableInput, condition, callback){
        connection.query("UPDATE " +tableInput+ " SET devoured=true WHERE id=" +condition+ ";", function(err, result){
            if(err) throw err;
            callback(result);
        })
    },

    //create a new data from html into database
    insertOne: function(tableInput, val, callback){
        connection.query("INSERT INTO "+tableInput+ " (chatroom_name) VALUES ('" +val+ "');", function(err, result){
            if(err) throw err;
            callback(result);
        })
    }
}// end of orm.



module.exports = orm;