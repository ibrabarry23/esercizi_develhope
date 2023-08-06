import { userGitHub } from "./utils";
function UserGit({ username }) {
    const data = userGitHub(username)
    console.log(data)
    return (

        <h1>{data.name}</h1>
    )
}
export default UserGit