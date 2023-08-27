import React, { useState, useRef } from "react"; // Assicurati di importare useRef

import useFetch from "./Component/useFetch";

export default function App() {
  const [inputVal, setInputVal] = useState('');
  const inputRef = useRef(null);
  
  const {data, loading} = useFetch('https://api.example.com/data');
  
  const handleSubmit = (e) => e.preventDefault();
  
  return (
    <>
      <h1>Example</h1>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputVal}
          onChange={(e)=> setInputVal(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      
      {loading ? (
        <p>Loading..</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </>
  )
}
