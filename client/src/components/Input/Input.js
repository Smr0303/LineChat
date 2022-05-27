import React from "react";

function Input({message,setmessage,sendMessage}) {
  return (
    <div className="inputContainer">
      <form className="form">
        <input
          className="input"
          type="text"
          placeholder="Type a Message"
          value={message}
          onChange={(e) => setmessage(e.target.value)}
          onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
        />
        <button onClick={(e)=>sendMessage(e)}>Send</button>
      </form>
    </div>
  );
}

export default Input;