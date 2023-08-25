import { useEffect, useState } from "react";

export default function useGithubUser(login) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    async function fetchDataGit(login) {
        try {
            const response = await fetch(`https://api.github.com/users/${login}`);
            if (response.status === 200) {
                const json = await response.json();
                setData(json);
            } else {
                setError("Errore nel recupero dei dati");
            }
        } catch (error) {
            setError("Si è verificato un errore durante la richiesta");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchDataGit(login);
    }, [login]);

    return { data, loading, error };
}
