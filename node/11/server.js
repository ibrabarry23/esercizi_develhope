const express = require('express');
const Joi = require('joi');

const app = express();
app.use(express.json());

const planets = [
    { id: 1, name: 'Mercury' },
    { id: 2, name: 'Venus' },
    { id: 3, name: 'Earth' },
    { id: 4, name: 'Jupiter' },
    { id: 5, name: 'Saturn' },
    { id: 6, name: 'Uranus' },
    { id: 7, name: 'Neptune' },
    { id: 8, name: 'Mars' }, 
];

const planetSchema = Joi.object({
  name: Joi.string().required(),
});

app.get('/', (req, res) => {
  res.send('Benvenuto nella homepage');
})
app.get('/api/planets', (req, res) => res.json(planets));

app.get('/api/planets/:id', (req, res) => {
    const planet = planets.find(p => p.id === parseInt(req.params.id));
    if (!planet) return res.status(404).send('Pianeta non trovato');
    res.json(planet);
});

app.post('/api/planets', (req, res) => {
    const { error } = planetSchema.validate(req.body);
    if (error) return res.status(400).send('Pianeta non trovato');

    const newPlanet = {
        id: planets.length + 1,
        name: req.body.name,
    };

    planets.push(newPlanet);
    res.status(201).json({ msg: 'Pianeta creato con successo' });
});

app.put('/api/planets/:id', (req, res) => {
    const planet = planets.find(p => p.id === parseInt(req.params.id));
    if (!planet) return res.status(404).send('Pianeta non trovato');

    const { error } = planetSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    planet.name = req.body.name;
    res.json({ msg: 'Pianeta aggiornato con successo' });
});

app.delete('/api/planets/:id', (req, res) => {
    const planetIndex = planets.findIndex(p => p.id === parseInt(req.params.id));
    if (planetIndex === -1) return res.status(404).send('Pianeta non trovato');

    planets.splice(planetIndex, 1);
    res.json({ msg: 'Pianeta eliminato con successo' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server in ascolto sulla porta ${port}`));
