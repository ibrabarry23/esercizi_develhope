import React, { useState } from "react";
import Counter from "./Component/Counter";

function App() {
  const handleCounterChange = (newCounterValue) => {
    console.log( newCounterValue);
  };

  return (
    <div>
      <h1>Contatore</h1>
      <Counter onCounterChange={handleCounterChange} />
    </div>
  );
}

export default App;
