import { useState } from "react";
function CounterClick() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleClick}>click</button>
    </>
  );
}

export default CounterClick;