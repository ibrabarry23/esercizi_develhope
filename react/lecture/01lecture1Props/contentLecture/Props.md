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

# Props

###### Notes wrote by Barry 

---
## Cosa sono le props 
Le props sono un meccanismo per passare dei dati da un componente genitore a un componente figlio in react. Le props consentono ai componenti di comunicare tra loro.
 
 ---

## Cosa sono le props 
### Esempio

 ```jsx
 import ChildComponent from "./component/ChildComponent"
 function App(){
     return(
    </ChildComponent name="Luca" age={11}>
 )
 }
 export default App

 ```

  ```jsx
 function ChildCompnent(props){
    return(
        <p>Ciao mi chiamo {props.name} e ho {props.age}</p>
    )
 }
 export default ChildCompnent
 ```
 
 ---

## Cosa sono le props 
### Esempio
In questo esempio, le props name e age vengono passate dal componente genitore (App.js) al componente figlio (ChildComponent.js) attraverso l'uso di attributi nell'etichetta JSX. Il componente figlio utilizza poi queste props per visualizzare i dati forniti dal componente genitore.

---
## Props destructuring
La destrutturazione delle props è una tecnica in react che consente di estrarre direttamente le proprietà in variabili separate.

---
## Props destructuring
### Esempio
```jsx
 import ChildCompnent from "./Component/ChildComponent";
function App(){
  return(
    <ChildCompnent name ="Gino" age={11}/>
  )
}
export default App
```

``` jsx
function ChildCompnent({name,age}){
    return(
        <h1>Ciao mi chiamo {name} e ho {age} anni </h1>
    )
 }
 export default ChildCompnent
```

--- 

## Esercizi 
### Esercizio 1
Crea un'applicazione React che mostri le informazioni di un utente. Crea due componenti: UserCard (componente genitore) e UserInfo (componente figlio). Passa le seguenti props dal componente genitore al componente figlio:

- name: Nome dell'utente.
- age: Età dell'utente.
- email: Indirizzo email dell'utente.

---
 ## Esercizi 
### Esercizio 2
Crea un'applicazione React che visualizzi una lista di articoli. Crea due componenti: ArticleList (componente genitore) e Article (componente figlio). Passa un array di oggetti articolo come prop dal componente genitore al componente figlio. Ogni oggetto articolo dovrebbe avere almeno un titolo e un contenuto. Nel componente figlio, itera attraverso l'array e visualizza il titolo e il contenuto di ciascun articolo.