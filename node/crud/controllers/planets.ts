import * as express from 'express';
import { Request, Response } from 'express';
import Joi = require('joi');
type Planet = {
  id: number;
  name: string;
};

let planets: Planet[] = [
  { id: 1, name: 'Mercury' },
  { id: 2, name: 'Venus' },
  { id: 3, name: 'Earth' },
  { id: 4, name: 'Jupiter' },
  { id: 5, name: 'Saturn' },
  { id: 6, name: 'Uranus' },
  { id: 7, name: 'Neptune' },
  { id: 8, name: 'Mars' },
];

const getAll = (req: Request, res: Response) => {
  res.status(200).json(planets);
};

const getOneById = (req: Request, res: Response) => {
  const { id } = req.params;
  const planet = planets.find(p => p.id === parseInt(id));

  if (!planet) {
    res.status(404).json({ msg: 'Planet not found' });
    return;
  }

  res.status(200).json(planet);
};

const planetSchema = Joi.object({
    id: Joi.number().integer().required,
    name: Joi.string().required
})

const create = (req: Request, res: Response) => {
  const { id, name } = req.body;
  const newPlanet: Planet = { id: id, name };

  const  validatedNewPlanet = planetSchema.validate(newPlanet);

    if(validatedNewPlanet.error){
        return res.status(400).json({msg: validatedNewPlanet.error})
    }else

  planets.push(newPlanet);

  res.status(201).json({ msg: 'The planet was created' });
};

const updateById = (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  planets = planets.map(p => (p.id === parseInt(id) ? { ...p, name } : p));

  res.status(200).json({ msg: 'The planet was updated' });
};

const deleteById = (req: Request, res: Response) => {
  const { id } = req.params;
  planets = planets.filter(p => p.id !== parseInt(id));

  res.status(200).json({ msg: 'The planet was deleted' });
};

export { getAll, getOneById, create, updateById, deleteById };
