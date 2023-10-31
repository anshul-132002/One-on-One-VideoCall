import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const [value, setvalue] = useState("");
  const navigate = useNavigate();

  const handleJoinRoom = useCallback(() => {
    navigate(`/room/${value}`);
  }, [navigate, value]);

  return (
    <div className="centered-content">
      <h1>Welcome to Your Video Call App </h1>
      <div className="input-container">
        <input
          type="text"
          value={value}
          onChange={(e) => setvalue(e.target.value)}
          placeholder="Enter the code"
        />
        <button onClick={handleJoinRoom}>Join Room</button>
      </div>
    </div>
  );
};

export default Homepage;
