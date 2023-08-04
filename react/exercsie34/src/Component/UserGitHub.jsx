import { useEffect, useState } from "react";

function UserGitHub({ username }) {
  const [data, setData] = useState("")
  async function fetchData(username) {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`)
      const dati = await response.json()
      setData(dati)
    } catch (error) {
      setError(error)
    }
  }
  useEffect(() => {
    fetchData(username)
  }, [username])
  return (
  <>
    <h1>{data.login}</h1>
    <h1>{data.id}</h1>
  </>

  )
}
export default UserGitHub