import React from "react";
function Age ({age}){
    return(
        <>
        {age > 16 ? <p>Your age is {age}</p> : <p>You are very young!</p>}
        </>
    )      
}
export default Age