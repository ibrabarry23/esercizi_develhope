import { useEffect, useState } from "react";

export const userGitHub = (username) => {
    const [data, setData] = useState("")
    async function fetchData(login) {
        try {
            const response = await fetch(`https://api.github.com/users/${login}`)
            if (response.status === 200) {
                const json = await response.json()
                setData(json)
            }
        } catch (error) {
            setError(error)
        }
    }
    useEffect(() => {
        fetchData(login)
    }, [login])
    return (
        data
    )
}
