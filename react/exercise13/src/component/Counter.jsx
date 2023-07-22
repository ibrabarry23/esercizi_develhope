import { useState } from "react"
function CounterDisplay({ count }) {
    return <h1>{count}</h1>;
  }
function Counter ({valoreIniziale, intervallo, incremento}){

    const [count ,setCount]= useState(valoreIniziale);

    useState(() => {
        const intervalId = setInterval(() => {
          setCount((item) => item + incremento);
        }, intervallo);
    
        return () => clearInterval(intervalId);
      }, []); 
    
      return <h1>{count}</h1>;
}

export default Counter