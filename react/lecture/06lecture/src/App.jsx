import useCounter from "./Component/useCounter";

export default function App (){
  const {count,incremento, decremento} = useCounter(0)
  return(
    <>
    <h1>Counter: {count}</h1>
    <button onClick={incremento}>Incremento:</button>
    <button onClick={decremento}>decremento:</button>
    </>
  )
}