import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

function DisplayLanguage() {
  const language = useContext(LanguageContext);
    const condition = ()=>{
      if(condition == ""){

      }
    }
  return (
    <>
      <LanguageContext.Consumer>
        {(language) => <h1>Your language of choice is: {language}</h1>}
      </LanguageContext.Consumer>
    </>
  );
}

export default DisplayLanguage;
