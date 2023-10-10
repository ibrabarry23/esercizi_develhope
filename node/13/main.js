const express = require('express');
const { json } = express;
const { getAll, getOneById, create, updateById, deleteById } = require('./controllers/planets');

const app = express();

app.use(json());

const PORT = 3000;

app.get('/api/planets', getAll);
app.get('/api/planets/:id', getOneById);
app.post('/api/planets', create);
app.put('/api/planets/:id', updateById);
app.delete('/api/planets/:id', deleteById);

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
