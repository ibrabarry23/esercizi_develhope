import { useEffect, useState } from "react";

export default function GithubUser({ login }) {
    const [data, setData]= useState([]);
    useEffect(()=>{
        async function fetchData () {
            try {
                const response = await fetch(`https://api.github.com/users/${login}`);
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
    console.log('Error fetching data:', error);
                
            }
        };
        fetchData();
    },[login])
   
    return (
        <>
        <p>Name: {data.login}</p>
        <p>Bio: {data.bio}</p>
        </>
    );
}
