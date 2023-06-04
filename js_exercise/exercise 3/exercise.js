function nicknameMap(persons) {
  let nicks=  [];
  for(let i = 0; i<persons.length; i++){
      let person = persons[i];
      let nickname = person.age +'' + person.name; 
      nicks.push(nicknames)
}
return nicks;
}

const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 },
];

const nicknames = nicknameMap(persons);
console.log(persons);
console.log(nicknames);