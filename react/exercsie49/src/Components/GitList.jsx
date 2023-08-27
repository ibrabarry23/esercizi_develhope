import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export function GitList() {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleButtonAddUsername() {
    setData((prevState) => [...prevState, inputValue]);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="username"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonAddUsername}>Add</button>
      <ul>
        {data.map((username, index) => (
          <li key={index}>
            <Link to={`/users/${username}`}>{username}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
