import { useEffect, useState } from "react";

export default function GithubUser({ login }) {
    const [data, setData]= useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`https://api.github.com/users/${login}`);
                if (response.ok) {
                    const jsonData = await response.json();
                    setData(jsonData);
                } else {
                    setError('API request failed with status: ' + response.status);
                }
            } catch (error) {
                setError('An error occurred while fetching data.');
            }
        }
        fetchData();
    }, [login]);

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <>
            <p>Name: {data.login}</p>
            <p>Bio: {data.bio}</p>
        </>
    );
}
