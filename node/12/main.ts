import express, { Application, Request, Response } from 'express';
import { getAll, getOneById, create, updateById, deleteById } from '../controllers/planets';

const app: Application = express();

app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    "script-src 'self' 'unsafe-inline';"
  );
  next();
});

app.use(express.json());

app.get('/api/planets', getAll);
app.get('/api/planets/:id', getOneById);
app.post('/api/planets', create);
app.put('/api/planets/:id', updateById);
app.delete('/api/planets/:id', deleteById);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
