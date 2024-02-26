import "./index.css"
import './App.css';
import {useState} from "react"

function App() {

  const [count,setCount] = useState(0)
  function inc() {
setCount(count+1)
  }
  function less(){
    setCount(count-1)
  }

  return (
    <div className="App">
      <h1>
        Counter: {count}
      </h1>
      <button className="btn" onClick={inc}>Increment</button><br></br><br></br>
      <button className="btn" onClick={less}>Decrement</button><br></br><br></br>
      
    </div>
  );
}

export default App;
