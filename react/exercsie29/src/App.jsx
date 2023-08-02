import React from "react";
import DisplayLanguage from "./Components/DisplayLanguage";
import { LanguageContext } from "./Components/LanguageContext";
import { useState } from "react";

function App() {
  const [language,setLanguage] = useState("en"); 
  const handleLanguageChange = (select) =>{
    setLanguage(select);
  };

  return (
    <>
    <select value={language} onChange={(e)=> handleLanguageChange(e.target.value)}>
      <option value="English">en</option>
      <option value="Espanol">es</option>
      <option value="German">de</option>
      <option value="Italian">it</option>
    </select>

    <LanguageContext.Provider value={language}>
      <DisplayLanguage/>
    </LanguageContext.Provider>
    </>
  );
}

export default App;
