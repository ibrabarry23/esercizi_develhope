import React, { useState } from "react";
import DisplayCounter from "./DisplayCounter";

function Counter({ valoreIniziale, intervallo, incremento }) {
  const [count, setCount] = useState(valoreIniziale);
  let intervalId;

  const updateCount = () => {
    setCount((item) => item + incremento);
  };

  const startInterval = () => {
    intervalId = setInterval(updateCount, intervallo);
  };


  const stopIntervall = () => {
    clearInterval(intervalId);
  };

  React.useEffect(() => {
    startInterval();

    return stopIntervall;
  }, []); 

  return <DisplayCounter count={count} />;
}

export default Counter;
