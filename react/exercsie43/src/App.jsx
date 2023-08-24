import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Counter from "./Component/Counter"; 

export default function App() {
  const navigate = useNavigate();

  function handleButtonNavigate() {
    navigate('/Counter'); 
  }

  return (
    <div>
      <h1>Welcome to my application!</h1>
      <button onClick={handleButtonNavigate}>Enter the counter app</button>
      <Routes>
        <Route path="/Counter" element={<Counter i={1} />} />
      </Routes>
    </div>
  );
}
