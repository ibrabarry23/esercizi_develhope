import Welcome from "./Component/Welcome";
function App () {
  const userLogged = true;
  return(
    <>
      <Welcome isLoggedIn={userLogged}/>
    </>
  )
}
export default App 