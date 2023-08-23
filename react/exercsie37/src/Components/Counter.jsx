import { useState, useEffect } from "react";

export default function Counter (){
    const [count, setCount] = useState(0);

    useState(()=>{
        const intervallo = setInterval(()=>{
            setCount(prevCount => prevCount+1);
        }, 1000);

        return()=>{
            clearInterval(intervallo)
        }
    },[]);
    return(
        <>
        <p>Counter: {count}</p>
        </>
    )
}