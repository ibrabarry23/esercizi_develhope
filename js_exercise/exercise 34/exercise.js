
/*
tarting from the previous exercise, we want to add to our function repeatHello, a clearInterval after 5 seconds, could you do that?

Tips:

The setInterval and setTimeout methods will be useful
*/ 
function printAsyncName (callback,name){
    let id = setInterval(callback,1000);
    setTimeout(() => {
        clearInterval(id);
        console.log(name)
        
    }, 2000);
}
function sayHello(){
    console.log("Hello");
}
printAsyncName(sayHello,"Ibra")