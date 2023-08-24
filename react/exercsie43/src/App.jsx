import { Link, Route, Routes, useNavigate } from "react-router-dom";
import {Counter} from "./Counter"
export default function App () {
  const navigate = useNavigate()
  const handleButtonNavigate = () => navigate('./Components/Counter')
  return (
    <div>
        <h1>Welcome to my application!</h1>
        <button onClick={handleButtonNavigate}>Enter the counter app</button>
         <Routes>
            <Route path="/Counter" element={<Counter i={1}/>} />
        </Routes> 
    </div>
)
}