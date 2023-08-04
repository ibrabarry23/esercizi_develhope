import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  useState(() => {
    setInterval(() => {
      setCount((i) => i + 1)
    }, 1000);
  })
  useEffect(() => {
    clearInterval(count)
  }, [count])
  return (
    <p>Timer: <strong>{count}</strong></p>
  )

}
export default Counter