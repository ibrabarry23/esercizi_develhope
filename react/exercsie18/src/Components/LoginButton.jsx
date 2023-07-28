import React from "react";

function LoginButton ({click, loginDisabilitato}){
  return(
    <>
    <button onClick={{click,loginDisabilitato}}>
      Login
    </button>
    </>
  )
}
export default LoginButton;