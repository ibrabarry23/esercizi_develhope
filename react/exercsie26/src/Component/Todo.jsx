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
    const removeItem = (index) =>{
        const updatedTodo = [...todo];
        updatedTodo.item.splice (index,1)
        setTodo(updatedTodo)
    }
    return (
        <>

        <ul>
        {todo.map((name, index) => (
          <li key={index}>
            {name}
            <button onClick={() => removeItem(index)}>Delete</button>
          </li>
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