import { useState } from "react";

function Form() {

    const[data, setData] = useState({
        username: '',
        email:''
    })

    const handleInputChange = (event)=>{
        const{name, value} = event.target;
        setData((prevData)=>({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubbmit = (event) =>{
        event.preventDefault()
        const {username , email } = data;
    }

    return (
        <>
        <form onSubmit={handleSubbmit}>
            <input type="text" name="username" value={data.username} onChange={handleInputChange}/>
            <input type="email" name="email" value={data.email} onChange={handleInputChange}/>
        </form>
        </>
    ) 
}
export default Form