import React from "react";
import useGithubUser from "./UserGitHub";

export default function GithubUser({ login }) {
    const { data, loading, error } = useGithubUser(login);

    if (loading) {
        return <div>Caricamento...</div>;
    }

    if (error) {
        return <div>Si è verificato un errore: {error}</div>;
    }

    return (
        <div>
            <h1>{data.login}</h1>
        </div>
    );
}
