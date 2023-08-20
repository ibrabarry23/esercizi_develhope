import { useState } from "react"

function Counter () {
    const [count, setCount] = useState(0);

    const incrementa = ()=> setCount(count+1);
    const decrementa = ()=> setCount(count-1);

    return(
        <>
        <p>Contatore {count}</p>
        <button onClick={incrementa}>Incrementa</button>
        <button onClick={decrementa}>Decrementa</button>

        </>
    )
}

export default Counter