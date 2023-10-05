const express = require('express');
const cors = require('cors');
const db = require("./database");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
    try {
        const utenti = await db.many(`SELECT * FROM users`);
        res.json(utenti); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal Server Error" }); 
    }
});

app.post("/signup", async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await db.oneOrNone(`SELECT * FROM users WHERE username = $1`, [username]);

        if (user) {
            res.status(409).json({ msg: "Username already in use" });
            return;
        }

        await db.none("INSERT INTO users (username, password) VALUES ($1, $2)", [username, password]);
        res.status(201).json({ msg: "User created" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
});

app.get("/user/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const user = await db.oneOrNone(`SELECT * FROM users WHERE id = $1`, id);

        if (!user) {
            res.status(404).json({ msg: "User not found" });
        } else {
            res.status(200).json(user);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Internal Server Error" }); 
    }
});

// Ricreiamo la tabella ogni volta che avviamo il server
const recreateTable = async () => {
    try {
        await db.query("DROP TABLE IF EXISTS users");
        await db.query(`
            CREATE TABLE users (
                id SERIAL PRIMARY KEY,
                username TEXT NOT NULL,
                password TEXT NOT NULL,
                token TEXT
            )
        `);
        console.log("Table 'users' created successfully.");
        await db.query("INSERT INTO users (username, password) VALUES ($1, $2) ON CONFLICT DO NOTHING", ["mario", "admin"]);
        console.log("Data inserted into 'users' table.");
    } catch (err) {
        console.error("Error recreating table:", err.message);
    }
};

recreateTable();

app.listen(port, () => console.log('Server running on port', port));
