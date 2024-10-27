import Btn from "./Btn";
import "./App.css"

function App() {
  const handleClick = (value) => {
    alert(value);
  };

  return (
    <div className="App">
      <h1>Hello World</h1>

      <p>Good Evening...!</p>

      <Btn username={"just"} handleClick={handleClick} />
      <Btn username={"All"} handleClick={handleClick} />
      <Btn username={"Movies"} handleClick={handleClick} />
      <Btn username={"Cars"} handleClick={handleClick} />
      <Btn username={"Cycles"} handleClick={handleClick} />
    </div>
  );
}

export default App;
