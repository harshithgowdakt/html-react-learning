import './App.css'
import { useRef } from "react";

function App() {
  let textTitle = useRef();
  let hexColor = useRef();

  const submit = (e) => {
    e.preventDefault();
    const title = textTitle.current.value;
    const color = hexColor.current.value;
    alert(`${title}, ${color}`);
    textTitle.current.value = "";
    hexColor.current.value = "";
  }

  return (
    <div className="App">
      <form onSubmit={submit}>
        <input type="text" placeholder='color title.......' ref={textTitle}></input>
        <input type='color' ref={hexColor}></input>
        <button>Add</button>
      </form>
    </div>
  );
}

export default App;
