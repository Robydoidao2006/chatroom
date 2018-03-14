-- default data
    INSERT INTO chatrooms ( chatroom_name, devoured ) VALUES ( "hello", FALSE);
    INSERT INTO chatrooms ( chatroom_name, devoured ) VALUES ( "how are you", FALSE);


    SELECT * FROM ChatRoom_db.chatrooms order by date desc;