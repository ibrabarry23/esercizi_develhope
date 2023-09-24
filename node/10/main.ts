import { Request, Response } from "express";
require("dotenv").config(); 
const morgan = require("morgan"); 

const express = require("express");
require("express-async-errors");

const app = express();

const { SERVER_PORT } = process.env;

app.use(express.json());

app.use(morgan("dev"));

type Planet = {
  id: number;
  name: string;
};

type Planets = Planet[];

let planets: Planets = [
    {
      id: 1,
      name: "Earth",
    },
    {
      id: 2,
      name: "Mars",
    },
  ];


  app.get("/", async (req: Request, res: Response) => {
    return res.status(200).json({ msg: "Hello, welcome to homepage!" });
  });
  

app.get("/planets", async (req: Request, res: Response) => {
  return res.status(200).json(planets);
});
app.get("/planets/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const planet = planets.find((p) => p.id === Number(id));

  if (!planet) {
    return res.status(404).json({ message: "Planet not found" });
  }

  return res.status(200).json(planet);
});
// Avviamo il server
app.listen(SERVER_PORT, () => {
  console.log(`Server is listening on port ${SERVER_PORT}`);
});