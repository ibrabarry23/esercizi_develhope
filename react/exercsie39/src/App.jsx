import React, { useState } from "react";
import Car from "./Component/Car"; // Assicurati di avere il percorso corretto al componente Car

function App() {
  const initialData = {
    model: "Ferrari",
    year: "2023",
    color: "red",
  };

  return (
    <>
      <Car initialData={initialData} />
    </>
  );
}

export default App;
