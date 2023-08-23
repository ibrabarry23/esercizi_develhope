import useCount from "./Component/UseCount"
export default function () {
  const init =  0
  const [count,incremento,decremento,reset] = useCount(init)
  return(
    <>
    <h1>Counter:{count}</h1>
    <button onClick={incremento}>Incremento</button>
    <button onClick={decremento}>Decremento</button>
    <button onClick={reset}>Reset</button>

    </>
  )
}