
function repeatHello(callback){
    const id = setInterval(()=>{
        callback();
    }, 1000)
    setTimeout(()=>{
        clearInterval(id)
    },5000 )
    }
    
    const sayHello = () =>{
        console.log("Hello")
    }
    repeatHello(sayHello)
    /*
    Le arrow function offrono una sintassi sintetica 
    rispetto a quelle delle classiche funzioni.
    */