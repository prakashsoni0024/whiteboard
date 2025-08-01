import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [roomId, setRoomId] = useState("");
  const navigate = useNavigate();

  const handleJoin = () => {
    if (roomId.trim() !== "") {
      navigate(`/whiteboard/${roomId}`);
    }
  };

  return (
<div className="h-screen flex items-center justify-center bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200">
  <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center">
    <h1 className="text-3xl font-bold mb-6 text-gray-800">
      🎨 Real-Time Whiteboard
    </h1>
    <input
      type="text"
      placeholder="Enter Room ID"
      value={roomId}
      onChange={(e) => setRoomId(e.target.value)}
      className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
    />
    <button
      onClick={handleJoin}
      className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-3 rounded-lg transition-all duration-200"
    >
      🚪 Join Room
    </button>
  </div>
</div>



  );
};

export default Home;
