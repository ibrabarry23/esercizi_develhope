import useSWR from "swr";
import { fetcher } from "./fetcher";

export default function useGithubUser(login) {
    if (login === null) {
        return {
            user: null,
            isLoading: false,
            isError: false
        };
    }

    const url = `https://api.github.com/users/${login}`;
    const { data, error } = useSWR(url, fetcher);

    return {
        user: data,
        isLoading: !error && !data,
        isError: error
    };
}
