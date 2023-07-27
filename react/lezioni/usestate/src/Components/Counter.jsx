import React from "react";
import { useState } from "react";

function Counter () {
    const[count,setCount ]=useState(0)
        const incremento = (()=>{
            if(count < 100){
                setCount((lastState)=>lastState+1)

            }
        })

        const incrementodiCinque = (()=>{
            if(count < 100){
                setCount((lastState)=>lastState+5)

            }
        })

        
        const decremento = (()=>{
            if(count >0 ){
                
                setCount((lastState)=>lastState-1)

            }
        })

        const decrementodiVenti = (()=>{
            if(count >0 ){
                
                setCount((lastState)=>lastState-5)

            }
        })
       
    return(
        
        <>

         <h2>{count}</h2>
         {count>=10? <p>hai contato fino a 10 </p>: null}
         <button onClick={incremento} >+</button>
         <button onClick={decremento}>-</button>
         <button onClick={incrementodiCinque}> incremento di 5 </button>
         <button onClick={decrementodiVenti}> decremento di 5 </button>

        </>

    )

}

export default Counter