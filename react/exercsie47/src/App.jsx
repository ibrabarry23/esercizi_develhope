import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Counter from "./Components/Counter";
import ShowGithubUser from "./Components/ShowGithubUser";
import Home from "./Home";

export default function App() {
    return (
        <Router>
            <>
            {/* <h1>Welcome to my application!</h1>     */}
               

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/counter" element={<Counter i={1} />} />
                    <Route path="/users/:username" element={<ShowGithubUser login= "ibrabbarry23"/>} />
                    <Route path="*" element={<><h1>Not Found!</h1></>} />

                </Routes>
            </>
        </Router>
    );
   
}
