import { useLang } from "./LangContext";
export default function DisplayLang () {
    const {lang} = useLang()
    return (
        <p>curent language {lang}</p>
    )
    
}
