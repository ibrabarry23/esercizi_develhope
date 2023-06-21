const isLogged = true;

const person = {
    name: "John", 
    age: 24
}

const myPromise = new Promise ((resolve, reject)=>{
if(isLogged === true){
    resolve(Math.random());

} else 
    reject("he is not logged")
})

const checkNumber = (number) =>{
    return new Promise((resolve, reject) => {
        if(number > 0.5){
           resolve(person);
        } else
            reject("The number is smaller than 0.5s")
    })
}

myPromise
.then(()=> checkNumber(Math.random()))
    .then((val) => console.log(val))
    .catch((error) => console.log(error))


   const matrice = [
    [1,2,3],
    [1,4,7],
    [1,9,3]

   ]

   console