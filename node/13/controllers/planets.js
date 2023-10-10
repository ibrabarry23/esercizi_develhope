const Joi = require('joi');
const pgPromise = require('pg-promise');

const db = pgPromise()("postgres://postgres:postgres@localhost:5432/postgres");

const planetSchema = Joi.object({
    id: Joi.number().integer().required(),
    name: Joi.string().required(),
});

const getAll = async (req, res) => {
    try {
        const planets = await db.many('SELECT * FROM planets;');
        res.status(200).json(planets);
    } catch (error) {
        res.status(500).json({ msg: 'Internal Server Error' });
    }
};

const getOneById = async (req, res) => {
    try {
        const { id } = req.params;
        const planet = await db.one('SELECT * FROM planets WHERE id =$1;', id);
        res.status(200).json(planet);
    } catch (error) {
        res.status(404).json({ msg: 'Planet not found' });
    }
};

const create = async (req, res) => {
    try {
        const { id, name } = req.body;
        const newPlanet = { id, name };

        const validatedNewPlanet = planetSchema.validate(newPlanet);

        if (validatedNewPlanet.error) {
            res.status(400).json({ msg: validatedNewPlanet.error });
        } else {
            await db.none('INSERT INTO planets (id, name) VALUES ($1, $2)', [id, name]);
            res.status(201).json({ msg: 'The planet was created' });
        }
    } catch (error) {
        res.status(500).json({ msg: 'Internal Server Error' });
    }
};

const updateById = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        await db.none('UPDATE planets SET name=$1 WHERE id=$2', [name, id]);
        res.status(200).json({ msg: 'The planet was updated' });
    } catch (error) {
        res.status(500).json({ msg: 'Internal Server Error' });
    }
};

const deleteById = async (req, res) => {
    try {
        const { id } = req.params;
        await db.none('DELETE FROM planets WHERE id=$1', id);
        res.status(200).json({ msg: 'The planet was deleted' });
    } catch (error) {
        res.status(500).json({ msg: 'Internal Server Error' });
    }
};

module.exports = {
    getAll,
    getOneById,
    create,
    updateById,
    deleteById,
};
