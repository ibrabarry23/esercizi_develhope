import React, { useState } from "react";
import LoginButton from "./LoginButton"; // Assicurati di avere la corretta convenzione di maiuscole/minuscole
import LoginForm from "./LoginForm"; // Assicurati di avere la corretta convenzione di maiuscole/minuscole

function Login({ login }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleLoginClick = () => {
    if (username !== "" && password !== "") {
      login({ username, password });
    }
  };

  const loginDisabilitato = username === "" || password === "";

  return (
    <>
      <LoginForm
        username={username}
        password={password}
        onUsernameChange={handleUsernameChange} // Assicurati di passare i gestori di eventi corretti
        onPasswordChange={handlePasswordChange} // Assicurati di passare i gestori di eventi corretti
      />
      <LoginButton onClick={handleLoginClick} disabled={loginDisabilitato} /> {/* Assicurati di passare la prop "disabled" */}
    </>
  );
}

export default Login;
