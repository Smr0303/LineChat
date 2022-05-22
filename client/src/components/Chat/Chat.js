import React, { useState, useEffect } from "react";
import queryString from "query-string";
import {io} from "socket.io-client";
import "./Chat.css";


let socket;


function Chat() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const END_POINT=`http://localhost:5000/`
  useEffect(() => {
   const {name,room}=queryString.parse(location.search);

   socket=io(END_POINT);
   console.log(socket);

 setName(name);
 setRoom(room);
  }, []);

  return <div className="chat">Chat</div>;
}

export default Chat;
