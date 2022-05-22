import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Join.css";

function Join() {
  const [name, setName] = useState(" ");
  const [room, setRoom] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name != "" && room != "") {
      history.push({
        pathname: "/chat",
        search: `?name=${name}&room=${room}`,
      });
    } else {
      alert("Please fill the required details");
    }
  };

  return (
    <div className="join">
      <div className="joinContainer">
        <h1>Join</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="joinInput"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="joinInput"
            type="text"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          />
          <button type="submit">Click</button>
        </form>
      </div>
    </div>
  );
}

export default Join;
