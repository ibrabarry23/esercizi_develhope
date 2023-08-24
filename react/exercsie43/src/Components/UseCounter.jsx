import { useState } from "react";

function UseCounter(i = 0) {
  const [counter, setCounter] = useState(i);

  const increment = () => {
    setCounter((j) => ++j );
  };

  const decrement = () => {
    setCounter((j) => --j );
  };

  const reset = () => {
    setCounter(i);
  };

  return {
    counter: counter,
    onIncrement: increment,
    onDecrement: decrement,
    reset: reset,
  };
}

export default UseCounter;