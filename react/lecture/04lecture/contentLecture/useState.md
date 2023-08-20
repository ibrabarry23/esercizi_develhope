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