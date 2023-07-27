---
marp: true
size: 4:3
---
# useState

---
## useState 

L'Hook useState consente di creare, aggiornare e manipolare lo stato all'interno dei componenti funzionali.

---
## useState 

React ha questo concetto di stato, che sono variabili che contengono dati da cui dipendono i nostri componenti e che possono cambiare nel tempo. Ogni volta che queste variabili cambiano, React aggiorna l'interfaccia utente eseguendo nuovamente il rendering del componente nel DOM con i valori correnti delle variabili di stato.

per utilizzare lo state dobbiamo importarlo:

```` jsx
import { useState } from "react";
````