class User{
    constructor(username, email){
        this.username = username;
        this.email = email;
    }
}

async function fetchUser(id){
    try{
        let response = await fetch( `https://jsonplaceholder.typicode.com/users/${id}`);
        let data = await response.json();
        // console.log(data);
        let newUser = new User(data.username,data.email);
        console.log(newUser);
    }catch(error){
        console.log(error);
    }

}

fetchUser(1)

const arr = [74, 92, 58, 31, 12, 85, 19, 67, 26, 43]
function sum (array){
    let sumArr = array.reduce((acc,cur)=>{
        return acc+cur;
    })
    if(sumArr %2 === 0){
        console.log("is even")
    } else{
        console.log("is odd")
    }
    console.log(sumArr)

}

sum(arr);

function isEven(array){
    let isEven = array.filter((item)=>{
        return item %2 === 0;
    })
    console.log(isEven);
}

isEven(arr);

function times(array){
    let times = array.map((item)=>{
        return item *2;
    })
    console.log(times)
}

times(arr);

