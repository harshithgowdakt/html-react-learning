import './App.css'
import { useState } from "react";

function useInput(initValue) {
  const [value, setValue] = useState(initValue);
  return [
    {
      value: value,
      onChange: (e) => setValue(e.target.value)
    },
    () => setValue(initValue)
  ]
}

function App() {


  const [titleprops, resetTitle] = useInput("");
  const [colorprops, resetColor] = useInput("#000000");


  const submit = (e) => {
    e.preventDefault();
    alert(`${titleprops.value}, ${colorprops.value}`);
    resetColor()
    resetTitle()
  }

  return (
    <div className="App">
      <form onSubmit={submit}>
        <input type="text"
          {...titleprops}
          placeholder='color title.......' >
        </input>
        <input type='color'
          {...colorprops} >
        </input>
        <button>Add</button>
      </form>
    </div>
  );
}

export default App;
