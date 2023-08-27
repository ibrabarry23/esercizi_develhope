import GithubUser from "./GithubUser";  

export default function ShowGithubUser() {
    const username = "ibrabarry23";

    return (
        <div>
            <h2>Github User Profile</h2>
            <GithubUser login={username} />
        </div>
    );
}