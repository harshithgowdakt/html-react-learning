import './App.css'
import { useState, useEffect } from "react"
function App() {
  const [emotion, setEmotion] = useState("happy");

  useEffect(() => {
    console.log(`It's ${emotion} right now`);
  }, [emotion])

  return (
    <div className="App">
      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion("sad")}> sad</button>
      <button onClick={() => setEmotion("excited")}> excited</button>
    </div>
  );
}

export default App;
