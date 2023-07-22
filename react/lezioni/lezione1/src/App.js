import React from 'react';


function App() {
  const name = "Lucia"
  const sayName = ()=>{
    console.log(name);
  }
  return (
   /* fragment => */ 
   <>
   Hello
    <button onClixk={sayName}>Display Name </button>
  </>
  )
}

export default App;
