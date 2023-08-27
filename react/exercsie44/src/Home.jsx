import { Link } from "react-router-dom";
import Counter from "./Components/Counter";
import ShowGithubUser from "./Components/ShowGithubUser";

export default function Home() {
    return (
        <>
            <Link to="/counter">
                <button>Go to Counter</button>
            </Link>
            <Link to="/users/ibrabarry23">
                <button>Go to ShowGithubUser</button>
            </Link>
           
        </>
    );
}
