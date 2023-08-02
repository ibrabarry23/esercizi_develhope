import React from "react";
import DisplayLanguage from "./Components/DisplayLanguage";
import { LanguageContext } from "./Components/LanguageContext";
function App() {
  const language = "en"; 

  return (
      <DisplayLanguage value={language} />
  );
}

export default App;
