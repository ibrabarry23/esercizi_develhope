const express = require('express');
const { json } = express;
const { getAll, getOneById, create, updateById, deleteById ,createImage} = require('./controllers/planets');

const app = express();


app.use(json());

const PORT = 3000;

app.get('/api/planets-controller', getAll);
app.get('/api/planets-controller/:id', getOneById);
app.post('/api/planets-controller', create);
app.put('/api/planets-controller/:id', updateById);
app.delete('/api/planets-controller/:id', deleteById);
app.post("/api/planets/id:/image", upload.single("image"), createImage)


app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
