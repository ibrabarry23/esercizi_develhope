function Reset ({onReset}) {
    const handleReset = () =>{
        if(typeof onReset === "function"){
            onReset();
        }        
    }
    return(
        <>
        <button type="button" onClick={handleReset}> reset</button>
        </>
    ) 
}

export default  Reset