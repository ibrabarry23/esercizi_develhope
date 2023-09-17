const fs = require('fs');

const contenuto = 'lorem ipsum';

fs.writeFile('esempio.txt', contenuto, (err) => err ? console.log('errore',err):console.log('eseguito correttamente'));
