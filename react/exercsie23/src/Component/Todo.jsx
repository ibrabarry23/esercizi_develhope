import { useState } from "react";
import Reset from "./Reset";
function Todo () {

    const [todo, setTodo] = useState ([]);
    const[val, setVal]= useState("");

    const changeValue= (event) =>{
        setVal(event.target.value)
    };

    const addItem= ()=>{
        val !=="" && setTodo([...todo,val]);
        
    };
    
    const handleReset = () => {
        setTodo([]);
        setVal("");
      };

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
            <Reset onReset={handleReset} />
        </form>
        </>
    )
}
export default Todo