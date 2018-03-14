-- Create the database burgers_db
CREATE DATABASE ChatRoom_db;
USE ChatRoom_db;

-- Create the table burgers
CREATE TABLE chatrooms
(
	id int NOT NULL AUTO_INCREMENT,
	chatroom_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
	date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);

