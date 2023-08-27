import { useState, useEffect } from "react";

export default function useFetch(url) { // Nota che il nome del custom hook è useFetch, non UseFetch
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(url);
                const jsonData = await response.json();
                setData(jsonData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        }
        fetchData();
    }, [url]);

    return { data, loading };
}
