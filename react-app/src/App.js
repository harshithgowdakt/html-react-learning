import './App.css'
import { useRef, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#000000");


  const submit = (e) => {
    e.preventDefault();
    alert(`${title}, ${color}`);
    setColor("#000000")
    setTitle("")
  }

  return (
    <div className="App">
      <form onSubmit={submit}>
        <input type="text"
          value={title}
          placeholder='color title.......'
          onChange={(event => setTitle(event.target.value))} >
        </input>
        <input type='color'
          value={color}
          onChange={event => setColor(event.target.value)} >
        </input>
        <button>Add</button>
      </form>
    </div>
  );
}

export default App;
