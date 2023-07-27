import DisplayCounter from "./DisplayCounter";

function Counter ({valoreIniziale, intervallo, incremento}){

    const [count ,setCount]= useState(valoreIniziale);

    useState(() => {
        const intervalId = setInterval(() => {
          setCount((item) => item + incremento);
        }, intervallo);
    
        return () => clearInterval(intervalId);
      }, []); 
    
      return <DisplayCounter count={count} />
}
