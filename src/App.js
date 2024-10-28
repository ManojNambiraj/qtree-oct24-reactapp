// import Btn from "./Btn";
import "./App.css"
import { useState } from "react";

function App() {

  const [state, setState] = useState(0);
  const [color, setColor] = useState("white")

  const handleClick = () => {
    setState(state + 1)
    setColor("green")
  }

  const handleDislike = () => {
    if(state === 0){
      setState(0)
    }else{
      setState(state - 1)
    }
    
    setColor("white")
  }

  return (
    <div className="App" style={{backgroundColor: color}}>
      <h1>{state}</h1>

      <button onClick={handleClick}>Like 👍</button>
      <button onClick={handleDislike}>Dislike 👎</button>
    </div>
  )







  // const handleClick = (value) => {
  //   alert(value);
  // };

  // return (
  //   <div className="App">
  //     <h1>Hello World</h1>

  //     <p>Good Evening...!</p>

  //     <Btn username={"just"} handleClick={handleClick} />
  //     <Btn username={"All"} handleClick={handleClick} />
  //     <Btn username={"Movies"} handleClick={handleClick} />
  //     <Btn username={"Cars"} handleClick={handleClick} />
  //     <Btn username={"Cycles"} handleClick={handleClick} />
  //   </div>
  // );
}

export default App;

// Hooks  -----> useState