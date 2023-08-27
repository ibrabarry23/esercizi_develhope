import { useEffect,useState } from "react";

export default function Component (){
    const [data,setData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        async function fetchData(){
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts')
                const jsonData = await response.json();
                setData(jsonData);
                setLoading(false);

            } catch (error) {
                console.log('error')
            }
        }
        fetchData()
    },[])
    return(
        <>
        {loading?(
            <p>Loading...</p>
        ):(
            <ul>
         {data.map((item,index)=>{
                return (
                    <li key={index}>{item.title}</li>
                )
            })}
        </ul>
        )}
      
        </>
    )
}