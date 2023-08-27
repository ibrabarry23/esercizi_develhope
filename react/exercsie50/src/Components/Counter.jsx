import React from "react";
import { useCounter } from "./UseCounter";
import { useNavigate } from "react-router-dom";

export default function Counter({ i  }) {
  const { count, onIncrement, onDecrement, onReset } = useCounter(i=0);
  const navigate = useNavigate();

  function handleButtonNavigate() {
    navigate('/');
  }

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onReset}>Reset</button>
      <button onClick={handleButtonNavigate}>Homepage</button>
    </>
  );
}
