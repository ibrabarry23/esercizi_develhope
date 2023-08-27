import { useState, useCallback } from "react";

export function useCounter(i = 0) {
  const [count, setCount] = useState(i);

  const handleButtonIncrement = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const handleButtonDecrement = useCallback(() => {
    setCount((prevCount) => prevCount - 1);
  }, []);

  const handleButtonReset = useCallback(() => {
    setCount(i);
  }, [i]);

  return {
    count: count,
    onIncrement: handleButtonIncrement,
    onDecrement: handleButtonDecrement,
    onReset: handleButtonReset,
  };
}
