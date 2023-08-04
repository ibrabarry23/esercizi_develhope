import { useEffect, useState } from "react"

const DisplayData = () =>{
    const [posts,setPosts]=useState("")
    useEffect(async()=>{
        const response = await fetch()
        const data = await response.json()
        console.log(data)
    },[])
    return(
        <>
        </>
    );
}
