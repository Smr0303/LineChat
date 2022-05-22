import React, { useState, useEffect } from "react";
import queryString from "query-string";
import {io} from "socket.io-client";
import "./Chat.css";


let socket;


function Chat() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const END_POINT=`http://localhost:5000/`;
  useEffect(() => {
   const {name,room}=queryString.parse(location.search);

   socket=io(END_POINT);
   console.log(socket);

 setName(name);
 setRoom(room);
 console.log(name,room);

socket.emit('join',{name,room},(message)=>{
  console.log(message);

});

return ()=>{
  socket.emit("disconnect");
  socket.off();
}

  }, [END_POINT,location.search]);

  return <div className="chat">Chat</div>;
}

export default Chat;
