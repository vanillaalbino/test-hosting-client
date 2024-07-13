import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // Состояние для хранения текущего значения
  const [count, setCount] = useState(0);

  // Функция для увеличения значения
  const incrementCount = () => {
    setCount(count + 1);
  };

  // Функция для уменьшения значения
  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Current Count: {count}</p>
        <div>
          <button onClick={incrementCount}>+</button>
          <button onClick={decrementCount}>-</button>
        </div>
      </header>
    </div>
  );
}

export default App;
