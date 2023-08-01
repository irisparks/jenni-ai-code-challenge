import React, { useState, useEffect} from "react";
import io from "socket.io-client";
import TextEditor from "./TextEditor";

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

    socket.emit("message", updatedText);
  };

  return (
    <>
      <h1>Real-time Collaborative Text Editor</h1>
      <textarea value={text} onChange={handleTextChange} />
      <TextEditor />
    </>
  );
}

export default App;
