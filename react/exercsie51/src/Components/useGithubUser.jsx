import useSWR, { mutate } from "swr";
import fetcher from "./Fetcher";

export default function useGithubUser(login) {
    if (login === null) {
        return {
            user: null,
            isLoading: false,
            isError: false,
            refetch: () => {}   
        };
    }

    const url = `https://api.github.com/users/${login}`;
    const { data, error } = useSWR(url, fetcher , { shouldRetryOnError: false });

    return {
        user: data,
        isLoading: !error && !data,
        isError: error,
        refetch: () => {
            mutate(url);
        }
    };
}
