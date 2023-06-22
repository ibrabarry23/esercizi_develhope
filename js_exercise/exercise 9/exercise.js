const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

let values = Object.keys(person);

  values.forEach((value)=>{
    console.log(`${value}:{person[value] }`)
  })