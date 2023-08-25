import { useEffect, useState } from "react";

function UserGitHub({ login }) {
  const [data, setData] = useState("")
  async function fetchData(login) {
    try {
      const response = await fetch(`https://api.github.com/users/${login}`)
      const dati = await response.json()
      setData(dati)
    } catch (error) {
      setError(error)
    }
  }
  useEffect(() => {
    fetchData(login)
  }, [login])
  return (
  <>
    <h1>{data.login}</h1>
    <h1>{data.id}</h1>
  </>

  )
}
export default UserGitHub