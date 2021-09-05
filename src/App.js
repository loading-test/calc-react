import "./App.css";
import Numbers from "./buttons/numbers/numbers";
import Operation from "./buttons/operators/operation";
import Equal from "./buttons/equal/equal";
import { useState } from "react";

function App() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result + e.target.innerText);
    console.log(e.target.innerText);
  };

  const clear = () => {
    setResult("");
  };

  const sum = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      alert("Неверные данные!");
    }
  };

  return (
    <div className="calculator">
      <div className="input">{result}</div>
      <div className="buttons">
        <Operation handleClick={handleClick} />
        <Numbers handleClick={handleClick} clear={clear} />
        <Equal sum={sum} />
      </div>
    </div>
  );
}

export default App;
