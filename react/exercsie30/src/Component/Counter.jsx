import { useState } from "react";

function Counter(){
    const [counter, setCounter]= useState(0);
    const click = () =>{
        setCounter(counter+1);
    };
    return(
        <>
        <p>{counter}</p>
        <button onClick={click}>click</button>
        </>
    )
}
export default Counter