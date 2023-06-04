function nicknameMap(persons) {
  const nicknames = []
  for(let i = 0 ; i < persons.length ; i++) {

    const name = persons[i].name;
    const age = persons[i].age;

    const nickname =name + '' + age;
    nicknames.push(nickname);
  }

  return nicknames;
     
}
/* alternativa ricorsiva*/ 
/*
function nicknameMap(persons, i = 0, nicknames = []) {
  ! caso base if (i === persons.length) {
    return nicknames;
  }

  const name = persons[i].name;
  const age = persons[i].age;
  const nickname = name + '-' + age;
  nicknames.push(nickname);

 * passo ricorisivo return nicknameMap(persons, i + 1, nicknames);
}*/

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
  { name: 'Alice', age: 28 }
];

const nicknames = nicknameMap(persons);
console.log(persons);
console.log(nicknames);