import { useState } from "react"
function Counter (){

    const [count ,setCount]= useState(0);
    useState(()=>{
        const intervall = setInterval (()=>{
            setCount((incrementCount)=> incrementCount+1)
        },1000)
    return ()=> clearInterval (intervall);
    },[])
    return <h1>{count}</h1>

}
export default Counter