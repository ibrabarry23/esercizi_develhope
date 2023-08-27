import { useState, useEffect } from "react";

export default function Fetch () {
    const [data, setData] = useState (null)
    const [loading, setLoading] = useState (true)

    useEffect(()=>{
        async function fethData(){
            try{
                const response = await fetch('https://api.example.com/data')
                const json = response.json()
                setData(json)
                setLoading(false)
            }catch(error){
                console.log('err')
            }
        }
        fethData();
    }, [])

    return(
        <>
        {loading?(
            <p>loading..</p>
        ): (
            <>
            <h1>Asyn Data</h1>
            <p>{data.message}</p>
            </>
        )}
        </>
    )
}