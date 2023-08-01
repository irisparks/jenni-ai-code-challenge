import React, { useState, useEffect} from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.on('message', (updatedMessage) => {
      setMessage(updatedMessage);
    });

    return () => {
      socket.off("message");
    }
  }, [])

  const handleTextChange = (event) => {
    const updatedMessage = event.target.value;
    setMessage(updatedMessage);

    socket.emit("message", updatedMessage);
  };

  return (
    <>
      <h1>Real-time Collaborative Text Editor</h1>
      <textarea id="text" name="text" rows="18" value={message} onChange={handleTextChange} />
    </>
  );
}

export default App;
