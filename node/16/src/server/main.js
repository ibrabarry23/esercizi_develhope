
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = process.env.SERVER_PORT || 3000;
const SECRET = process.env.SECRET || "your_default_secret";

app.use(morgan("dev"));
app.use(bodyParser.json());

const usersDB = [];

app.post("/users/signup", (req, res) => {
  const { username, password } = req.body;

  if (usersDB.some((user) => user.username === username)) {
    return res.status(400).json({ error: "Username already exists." });
  }

  const newUser = { id: usersDB.length + 1, username, password };
  usersDB.push(newUser);

  res.json({ msg: "Registration successful. You can now log in." });
});

app.post("/users/login", (req, res) => {
  const { username, password } = req.body;

  const user = usersDB.find((u) => u.username === username);

  if (!user || user.password !== password) {
    return res.status(401).json({ error: "Invalid username or password." });
  }

  const token = jwt.sign({ id: user.id, username: user.username }, SECRET);

  res.json({ token, id: user.id, username: user.username });
});

app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}`);
});
