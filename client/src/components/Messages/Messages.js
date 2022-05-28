import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import "./Messages.css";
import Message from "../Message/Message";
function Messages({ messages, name }) {
  return ( 
    <div>
      <ScrollToBottom>
        {messages.map((ele, i) => {
          <div key={i}>
            <Message ele={ele} name={name} />
          </div>;
        })}
      </ScrollToBottom>
    </div>
  );
}

export default Messages;
