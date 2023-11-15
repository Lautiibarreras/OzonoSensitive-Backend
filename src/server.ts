import express from 'express';
import { AppDataSource } from './persistance/config';
import router from './router/routes';

const app = express();
const PORT = 8080;

app.use(express.json());

app.use('/api', router);

AppDataSource.initialize().then(() => {
  app.listen(PORT, () => {
    console.log(`El servidor está corriendo en http://localhost:${PORT}`);
    console.log(`db connected`);
    
  });
});
