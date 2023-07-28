import { useState } from "react";
import DisplayForm from "./DisplayForm";

function Form(){

    const[password,setPassword] = useState("")
    const[username,setUsername] = useState("")

    // const changePsw = (event) =>{
    //     const pass = event.target.value;
    //     setPassword(pass)
    //     console.log(password)
    // }
    
    // const userName = (event) =>{
    //     const user = event.target.value;
    //     setUsername(user)
    //     console.log(username)
    // }
    const [user,setUser] = useState({})
    const handelSubbmit = (event)=>{
        event.preventDefault()
        const user = event.target.Username.value;
        const psw = event.target.Password.value;
        setUser({
            user:user,
            password:psw
        })
    }

    return(
        <>
        <DisplayForm form={user} />
        <form onSubmit={handelSubbmit}>
            <button type="submit">Submit</button>
            <input type="password" name="Password" />
            <input  type="text" name="Username" />
        </form>

        </>
    )
}

export default  Form