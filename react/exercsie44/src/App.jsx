import React from "react";
import { BrowserRouter as Router, Route, Link, Routes, useNavigate } from "react-router-dom";
import Counter from "./Components/Counter";
import ShowGithubUser from "./Components/ShowGithubUser";
import Home from "./Home";

export default function App() {
    return (
        <Router>
            <div>
                <h1>Welcome to my application!</h1>
               

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/counter" element={<Counter i={1} />} />
                    <Route path="/users/:username" element={<ShowGithubUser login= "ibrabbarry23"/>} />
                    
                </Routes>
            </div>
        </Router>
    );
}
