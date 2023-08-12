import React, { useEffect, useState } from "react";

async function fetchGitHubUser(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (response.ok) {
      const json = await response.json();
      return json.name || "Nome non disponibile";
    } else {
      console.error("Errore durante la richiesta API:", response.statusText);
    }
  } catch (error) {
    console.error("Errore durante la richiesta API:", error);
  }
  return "Errore di caricamento";
}

function UserGit({ username }) {
  const [name, setName] = useState("Caricamento...");

  useEffect(() => {
    async function fetchData() {
      const userName = await fetchGitHubUser(username);
      setName(userName);
    }
    fetchData();
  }, [username]);

  return (
    <div>
      <h1>Nome Utente GitHub</h1>
      <p>{name}</p>
    </div>
  );
}

export default UserGit;
