import { createContext, useContext, useState } from "react";

const LangContext = createContext();

export function LangProvider(props) {
  const [lang, setLang] = useState('en');
  const changeLang = (newLang) => setLang(newLang);
    
  return ( 
    <LangContext.Provider value={{ lang, changeLang }}>
      {props.children}
    </LangContext.Provider>
  );
}

export const useLang = () => {
  return useContext(LangContext);
}
