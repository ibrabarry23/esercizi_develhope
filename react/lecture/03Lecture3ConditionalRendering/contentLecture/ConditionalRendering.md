---
marp: true
size: 4:3
---

<style>
  section {
   
    font-family: "Computer Modern", sans-serif;
    color: black;

  }
  h1,h6 {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;

  }
</style>

# Conditional rendering

###### Notes wrote by Barry 

---
## Conditional rendering

Il conditional renderign in si riferisce alla pratica di decidere quali componenti renderizzare sulla base di una condizione specifica.

---
## Conditional rendering
#### Esempi 
``` jsx 
function Welcome(props) {
  const isLogged = props.isLogged  
  return(
    <h1>Ciao,{isLogged? 'utente':'ospite'}</h1>
  )
}
export default Welcome
```
---
## Conditional rendering
#### Esempi

``` jsx
import Welcome from "./Component/Welcome";
function App () {
  const userLogged = true;
  retutn(
    <>
      <Welcome isLoggedIn={userLogged}/>
    </>
  )
}
export default App 

```