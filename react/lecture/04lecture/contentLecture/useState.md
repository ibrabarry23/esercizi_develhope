---
marp: true
size: 4:3
class: invert

---

<style>
  section {
   
    font-family: "Computer Modern", sans-serif;

  }
  h1,h6 {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

  }
</style>

# Usestate

###### Notes wrote by Barry 

---
## Usestate 

Lo use state è un hook che consente ai componenti di gestire e mantenere uno stato interno.

---

## Inizializzaione
``` jsx
import React , {useSate} from ' react';
```

---
## Utilizzo 
Successivamente, all'interno del componente funzionale, dichiariamo uno stato utilizzando useState:

```jsx
const [value, setValue] = useState(initialValue)
```
- value è il valore dello stato;
- setValue è la funzuione che mi consente di modifcare lo stato;
- initialValue è il valore inziale dello stato.

---

## Esempio 
```jsx
import React, {useState}  from 'react'
function Counter (){

  const [count , setCount]= useState(0)
  const incremento = () => setCount(count+1);
  const decremento = () => setCount(count+1);
  
  return(
    <>
    <h1>Counter</h1>
    <button onClick={incremento}>Incremento:</button>
    <button onClick={decremento}>Decremento:</button>
    </>
  )

}
export default Counter
```
---
## Esempio 
```jsx
import Counter from "./counter"

function App(){
  return (
    <Counter/>
  )
}

export default App
```