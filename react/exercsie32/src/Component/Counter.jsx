import { useState,useEffect } from "react";

function Counter({onCounterChange}){
    const [counter, setCounter]= useState(0);
    const click = () =>{
        setCounter(counter+1);
    };
    useEffect(()=>{
        onCounterChange(counter)
    },[counter,onCounterChange]);
    return(
        <>
        <p>{counter}</p>
        <button onClick={click}>click</button>
        </>
    )
}
export default Counter