import { useState } from "react";

export default function useCounter (initVal) {
    const[count, setCount] = useState(initVal)

    const incremento = () => setCount(count+1)
    const decremento = () => setCount(count-1)

    return{count, incremento, decremento}

}