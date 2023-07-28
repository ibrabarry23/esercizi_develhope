import React from "react";
function LoginForm({username,password, usernameChange, pswChange}){
    return(
        <>
    <form >
        <input type="text"  value={username} onChange={usernameChange}  />
        <input type="password"   value={password} onChange={pswChange}/>
    </form>
        </>
    )
}
export default LoginForm