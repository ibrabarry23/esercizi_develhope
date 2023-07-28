
import Login from "./Components/Login";
function App(){
  const handelLogin = (data)=>{
    console.log("login eseguito",data)
  }
  return(
    <>
    <Login login={handleLoginClick}/>
    </>
  )
}
export default App