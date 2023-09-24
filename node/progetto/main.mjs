import express from 'express';
import axios from 'axios';
import cors from 'cors'
const app = express();
const port = 3000;
app.use(cors())
app.use(express.json())
app.get("/pokemon", async (req, res) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/ditto`);
        const data = response.data;
        res.send(data);
    } catch (error) {
        console.error("Errore nella richiesta API:", error);
        res.status(500).json({ error: "Si è verificato un errore nella richiesta API." });
    }
});

app.listen(port, () => {
    console.log('Il server è in esecuzione sulla porta', port);
});
