const pgPromise = require("pg-promise");
const pgp = pgPromise();

const db = pgp({
    connectionString: "postgres://postgres:postgres@localhost:5432/db",
});

// const newTable = async () => {
//     try {
//         const tableExists = await db.oneOrNone(`
//             SELECT to_regclass('public.users') AS table_name
//         `);

//         if (!tableExists) {
//             // La tabella non esiste, quindi la creiamo
//             await db.query(`
//                 CREATE TABLE users (
//                     id SERIAL PRIMARY KEY,
//                     username TEXT NOT NULL,
//                     password TEXT NOT NULL,
//                     token TEXT
//                 )
//             `);

//             console.log("Table 'users' created successfully.");

//             // Inseriamo alcuni dati di esempio
//             await db.query(`
//                 INSERT INTO users (username, password) VALUES ($1, $2) ON CONFLICT DO NOTHING
//             `, ["mario", "admin"]);

//             console.log("Data inserted into 'users' table.");
//         } else {
//             console.log("Table 'users' already exists.");
//         }
//     } catch (err) {
//         console.error("Error creating table:", err.message);
//     }
// };

newTable();

module.exports = db;
