import React, { useState } from "react";

function ClickTracker(){
    const [count, setCount] = useState("")
    const gestisciClic = (event)=>{
        const lastPressedBtn = event.target.innerHTML
        setCount(lastPressedBtn);

    };
    return(
        <>
        <h1>Last pressed button: {count}</h1>
        <button onClick={gestisciClic}>Button 1</button>
        <button onClick={gestisciClic}>Button 2</button>
        <button onClick={gestisciClic}>Button 3</button>
      </>
    )

}

export default ClickTracker