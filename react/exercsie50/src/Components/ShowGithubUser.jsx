import React from "react";
import useGithubUser from "./useGithubUser";
import { useParams } from "react-router-dom";

export default function ShowGithubUser() {
    const { username } = useParams(); 
    const { user, isLoading, isError } = useGithubUser(username);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p>Error fetching data for user: {username}</p>;
    }

    return (
        <div>
            <h2>Github User: {user.login}</h2>
            <p>Name: {user.name}</p>
            <p>Bio: {user.bio}</p>
        </div>
    );
}
