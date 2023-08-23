import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const DisplayLanguage = () => {
  const language = useContext(LanguageContext);

  return (
    <div>
      <h1>Your language of choice is: {language}</h1>
    </div>
  );
};

export default DisplayLanguage;