import { useState , useCallback} from "react"

export default function useCount (init){
    const [count, setCount] = useState(init);

    const incremento = useCallback(()=>{
        setCount((i)=>++i);
    },[])

    const decremento = useCallback(()=>{
        setCount((j)=>--j);
    },[])
    
    const reset = useCallback(()=>{
        setCount(init);
    },[init])

    return[count,incremento,decremento,reset]
}