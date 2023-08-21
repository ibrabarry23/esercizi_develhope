import { LangProvider } from "./Components/LangContext";
import  DisplayLang  from "./Components/DisplayLang";
import LangSelector from "./Components/LangSelector"
 function App () {
return(
  <>
  <LangProvider>
    <>
    <h1>Choose your lang</h1>
    <DisplayLang/>
    <LangSelector/>
    </>
  </LangProvider>
  </>
)
}
export default App