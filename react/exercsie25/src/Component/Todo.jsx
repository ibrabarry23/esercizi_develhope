import { useState } from "react";

function Todo () {

    const [todo, setTodo] = useState ([]);
    const[val, setVal]= useState("");

    const changeValue= (event) =>{
        setVal(event.target.value)
    };

    const addItem= ()=>{
        val !=="" && setTodo([...todo,val]);
        setVal("")
        
    };
    const resetItems = () =>{
        setTodo([])
    }

    return (
        <>

        <ul>
            {todo.map((name,item)=>(
            <li key={item}> {name}</li>
            ))}
        </ul>

        <form >
            <input type="text" value={val} onChange={changeValue} />
            <button type="button" onClick={addItem}>add</button>
            <button onClick={resetItems}>reset</button>
        </form>
        </>
    )
}
export default Todo