import React from "react";
import { useCounter } from "./UseCounter";
import { useNavigate } from "react-router-dom";

export default function Counter({ i = 0 }) {
  const { count, onIncrement, onDecrement, onReset } = useCounter(i);
  const navigate = useNavigate();

  function handleButtonNavigate() {
    navigate('/Counter');
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onReset}>Reset</button>
      <button onClick={handleButtonNavigate}>Homepage</button>
    </div>
  );
}
