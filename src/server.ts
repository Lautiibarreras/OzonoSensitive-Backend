import express from 'express';
import cors from 'cors';
import routes from './route/routes';
import 'reflect-metadata';
import './db';

const app = express();
const PORT = 8080;

app.use(cors());

app.use(express.json());

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`El servidor está corriendo en http://localhost:${PORT}`);
    console.log(`db connected`);
});