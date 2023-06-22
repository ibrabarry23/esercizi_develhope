const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

let values = Object.keys(person);

for(let i = 0; i<values.length; i++){
  let value = values[i];
  console.log(`${value}: ${person[value]}`);

}