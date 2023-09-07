function sum (arr){
return arr.reduce((acc,cur)=>acc+cur,0)
}

/* da una funzioe che prende un parametro di array di stringhe ci deve restituire la stringa + lunga*/ 

function stringh(arr){
if(arr.length===0){
    return null; 
}
arr.sort((a,b)=> b.length-a.length)
return arr[0]
}

const stringhe = ["aaaaaaaaa","bb" ,"cccccccdaasasahsbsghjdggdsvhdvcghx","ccc" ];
const stringLong= stringh(stringhe);
console.log(stringLong);

module.exports = {
    sum,
    stringh
};

// function stringh(arr) {
//     let moreLong = "";
    
//     arr.forEach(element => {
//         if(element.element>moreLong.length){
//             moreLong.length = element
//         }
//     });
//     return moreLong;
// }

// const stringhe = ["a","bb" ,"ccc"];
// console.log(stringh(stringhe));