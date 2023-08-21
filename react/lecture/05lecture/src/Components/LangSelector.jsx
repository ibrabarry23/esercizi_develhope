import { useState } from "react";
import { useLang } from "./LangContext";

export default function langSelector (){
    const {changeLang} = useLang()
   const [select, setSelect] = useState('en')
    
    const handleLangChange = (e)=>{
        const newLang = e.target.value;
        setSelect(newLang);
        changeLang(newLang);
    }

    return (
        <>
        <select value={select} onChange={handleLangChange}>
            <option value="en">English</option>
            <option value ="it">Italian</option>
            <option value ="jp">japanese</option>

        </select>
        </>
    )
} 