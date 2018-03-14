//require packages
var mysql = require("mysql");

//setting up connection
var connection;
//add condition
if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else{
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "ChatRoom_db"
    });
};

//if error, return error
connection.connect(function(err){
    if(err) {
        console.error("error connecting: " +err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;