import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import App from "./App"; 

export function Root() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  );
}
