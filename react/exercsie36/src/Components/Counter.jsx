import UseCounter from "./UseCounter";

function Counter ({i= 0}) {
    const { counter, onIncrement, onDecrement, reset } = UseCounter(i)
    return(
        <>
        <h1>Time {counter}</h1>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        </>
    )
}
export default Counter