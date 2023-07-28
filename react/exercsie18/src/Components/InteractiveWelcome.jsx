import { useState } from "react";
import Welcome from "./Welcome";
function InteractiveWelcome() {
  const [name,setName] = useState("")
  const change = ((e)=>{
      const nome = e.target.value
      setName(nome)
  })
      return (
        <>
        <Welcome userName = {name}/>
        <input type="text" onChange={change}/>
        </>
      )
}
export default InteractiveWelcome