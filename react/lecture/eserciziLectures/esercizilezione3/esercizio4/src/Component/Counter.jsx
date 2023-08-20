import {useState} from 'react'

function Counter () {

    const [count,setCount] = useState(0)
    const limite = 10 ; 

    const incremento = () =>{
        if(count<limite){
            setCount(count+1)
        }
    }

    const decremento = () =>{
        if(count > 0 )
        setCount(count-1)
    }

    return (
        <>
        <h1>Contatore {count}</h1>
        <button onClick={incremento}>incremento</button>
        <button onClick={decremento}>decremento</button>

        </>
    )

}
export default Counter