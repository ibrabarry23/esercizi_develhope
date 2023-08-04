import { useEffect, useState } from "react";

function UserGitHub({ username, onLoadingChange, onError }) {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  async function fetchData(username) {
    try {
      onLoadingChange(true); // Notifica lo stato di caricamento
      setError(null); // Resetta lo stato di errore
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error("Failed to fetch data from GitHub");
      }
      const dati = await response.json();
      setData(dati);
    } catch (error) {
      setError(error);
    } finally {
      onLoadingChange(false); // Notifica la fine del caricamento
    }
  }

  useEffect(() => {
    fetchData(username);
  }, [username]);

  return (
    <>
      {data.name && <h1>{data.login}</h1>}
      {data.id && <h1>{data.id}</h1>}
      {error && <div>Error: {error.message}</div>}
    </>
  );
}

export default UserGitHub;
