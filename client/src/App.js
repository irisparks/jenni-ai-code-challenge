import "./App.css";
import io from "socket.io-client";
import { useEffect, useState } from "react";

const socket = io.connect("http://localhost:3001");

function App() {
  const [text, setText] = useState("");

  useEffect(() => {
    socket.on('message', (updatedText) => {
      setText(updatedText);
    });

    return () => {
      socket.off("message");
    }
  }, [])

  const handleTextChange = (event) => {
    const updatedText = event.target.value;
    setText(updatedText);

    socket.emit("message", updatedText)
  };

  return (

    <div>
      <h1>Real-time Collaborative Text Editor</h1>
      <textarea value={text} onChange={handleTextChange} />
    </div>
  );
}

export default App;