const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

// Print values of person using Object.keys
let values = Object.keys(person);

  for(let i in values){
    console.log(`${values[i]}: ${person[values[i]]}`);
  }
