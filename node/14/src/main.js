const express = require('express');
const Joi = require('joi');
const pgPromise = require('pg-promise');
const multer = require('multer');
const app = express();
const PORT = 3000;

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage });

app.use(express.json());
const db = pgPromise()("postgres://postgres:postgres@localhost:5432/postgres");

const setupDb = async () => {
    await db.none(`
        DROP TABLE IF EXISTS planets; 
        CREATE TABLE planets (
            id SERIAL NOT NULL PRIMARY KEY,
            name TEXT NOT NULL,
            image TEXT
        )
    `);

};

setupDb();

const getAll = async (req, res) => {
    try {
        const planets = await db.many('SELECT * FROM planets;');
        res.status(200).json(planets);
    } catch (error) {
        res.status(500).json({ msg: 'Internal Server Error' });
    }
};


const createImage = async (req, res) => {
    try {
        const { id } = req.params;
        const imagePath = `upload/solar-system.png`; 

        await db.none('UPDATE planets SET image=$1 WHERE id=$2', [imagePath, id]);

        res.status(200).json({ msg: 'L\'immagine è stata caricata con successo' });
    } catch (error) {
        res.status(500).json({ msg: 'Errore interno del server' });
    }
};


app.post('/planets/:id/image', upload.single('image'), createImage);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
