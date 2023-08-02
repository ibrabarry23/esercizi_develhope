
// inizializziamo uno state con un array vuoto
// dentro l'array andiamo a inserire, al click del bottone,  il valore scritto nell'input
// mappiamo l'array creato un li per ogni elemento inserito dentro l'array

import { useState } from "react"

function Todo(){

    const [input, setInput]= useState([ ]);
    
    const clickButton = (event) =>{
       event.preventDefault();
        const val = event.target.textBox.value; 
        setInput([...input , val]); 
        console.log(input) ;
    }

    return (
        <form onSubmit={clickButton}>
            <input type="text"  name="textBox" />
            <button type="submit "> Button </button>
        </form>
    )
}

export default Todo