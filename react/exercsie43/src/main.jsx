import React from "react";
import { createRoot } from "react-dom/client"; // Importa createRoot da "react-dom/client"
import { BrowserRouter } from "react-router-dom";
import { Root } from "./Root"; // Assicurati che il percorso sia corretto

const rootElement = document.getElementById("root");

createRoot(rootElement).render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>
);
