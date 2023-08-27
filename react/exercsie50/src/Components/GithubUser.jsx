import React from "react";
import useSWR from "swr";
import { fetcher } from "../fetcher";
import useGithubUser from "./useGithubUser";

export default function GithubUser({ login }) {
    const { data, error } = useSWR(`https://api.github.com/users/${login}`, fetcher);

    if (error) {
        return <p>Error fetching data: {error.message}</p>;
    }

    if (!data) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <p>Name: {data.login}</p>
            <p>Bio: {data.bio}</p>
        </>
    );
}
