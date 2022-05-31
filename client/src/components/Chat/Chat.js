import React, { useState, useEffect } from "react";
import queryString from "query-string";
import { io } from "socket.io-client";
import "./Chat.css";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";
let socket;

function Chat({ location }) {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setmessage] = useState("");
  const [messages, setmessages] = useState([]);
  const END_POINT = `http://localhost:5005/`;

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(END_POINT);

    setName(name);
    setRoom(room);
    console.log(name, room);

    socket.emit("join", { name, room }, () => {});

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [END_POINT, location.search]);

  useEffect(() => {
    let messagesLocal = [...messages];
    socket.on("message", (message) => {
      console.log("yadav", message);
      setmessages([...messagesLocal, message]);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message);
      setmessage(" ");
    }
  };

  return (
    <div className="chat">
      <div className="outerContainer">
        <div className="container">
          <InfoBar room={room} />
          <Messages messages={messages} name={name} />
          <Input
            message={message}
            setmessage={setmessage}
            sendMessage={sendMessage}
          />
        </div>
      </div>
    </div>
  );
}

export default Chat;
