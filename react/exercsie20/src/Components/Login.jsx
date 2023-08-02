import { useState } from "react";
import Reset from "./reset";
function Login({ onLog }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const userChange = (e) => {
    setUsername(e.target.value);
  };

  const passwordChange = (event) => {
    setPassword(event.target.value);
  };

  const loginClick = () => {
    onLog({ username, password });
  };
  const isDisabled = username === "" || password === "";
  
  const resetInput = () => {
    setUsername("");
    setPassword("");
  };

  return (
    <>
      <label>Username:</label>
      <input type="text" value={username} onChange={userChange} placeholder="Username" />

      <label>Password:</label>
      <input type="password" value={password} onChange={passwordChange} placeholder="Password" />

      <button onClick={loginClick} disabled={isDisabled}>
        Login
      </button>
      <Reset onReset={resetInput}/>
    </>
  );
}
export default Login;