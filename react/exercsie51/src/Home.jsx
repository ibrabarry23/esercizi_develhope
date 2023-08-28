import { Link, useLocation } from "react-router-dom";
import Counter from "./Components/Counter";
import ShowGithubUser from "./Components/ShowGithubUser";
export default function Home() {
    const location = useLocation();

    if (location.pathname === "/") {
        return (
            <>
                <h1>Welcome to my application!</h1>
                <Link to="/counter">
                <button>Go to Counter</button>
            </Link>
            <Link to="/users/ibrabarry23">
                <button>Go to ShowGithubUser</button>
            </Link>
            
            
            <Link to="/github-users">
                <button>Github Users List</button>
            </Link>
            </>
        );
    } else {
        return (
            <>

                <Link to="/">
                    <button>Go to Home</button>
                </Link>
            </>
        );
    }
}

