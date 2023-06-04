const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".
person2.firstName = "Simon"

/*
*  a diffferenza dei dati primitivi gli oggetti allocano le variabili in 
* memoria per riferimento. 
* In questo esercizio alla variabile person2 è assegnato l'oggetto person, dunque:
* person1 e person due fanno riferimento alla stessa posizione di memoria.

*/ 
console.log(person1);
console.log(person2);
