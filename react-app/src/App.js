import './App.css'
import { useState, useEffect } from "react";

function App() {
  const [emotion, setEmotion] = useState("happy");
  const [secodary, setSecondary] = useState("tired");

  useEffect(() => {
    console.log(`It's ${emotion} right now`);
  }, [emotion]);

  useEffect(() => {
    console.log(`It's ${secodary} right now`)
  });

  return (
    <div className="App">
      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion("sad")}> sad</button>
      <button onClick={() => setEmotion("excited")}> excited</button>
      <h1>Secondary emotion is {secodary}</h1>
      <button onClick={() => setSecondary("grateful")}> grateful</button>
    </div>
  );
}

export default App;
