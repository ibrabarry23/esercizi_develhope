const number = 15;

const myPromise = new Promise ((resolve,reject)=>{
    if(number >10 ){
        resolve("Siccome il numero è 15, dunque è strettamente maggiore di 10");
} else
    reject("Siccome il numero è 15, dunque è strettamente minore di 10 ");
}) 

myPromise
    .then((value)=>console.log(value))
    .catch((error)=>console.log(error))
