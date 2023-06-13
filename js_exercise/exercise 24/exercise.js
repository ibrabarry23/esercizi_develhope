const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

const { id, firstName:name, lastName:surname, old } = person;
console.log(id, name, surname, old);