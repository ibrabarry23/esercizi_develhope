import { useState } from "react";
import UserGitHub from "./UserGitHub";

function UserGitHubList() {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddUsername = () => {
    if (inputValue !== "") {
      setData((users) => [...users, inputValue]);
      setInputValue("");
    }
  };

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        disabled={loading}
      />
      <button onClick={handleAddUsername} disabled={loading}>
        Add
      </button>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      <ul>
        {data.map((username, index) => (
          <li key={index}>
            <UserGitHub
              username={username}
              onLoadingChange={setLoading}
              onError={setError}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default UserGitHubList;
