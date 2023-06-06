function printName(){
    const helloName = "Hello Jhon";
    function inner(){
        return helloName
    }
    console.log(inner());
}
printName();