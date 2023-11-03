import express from 'express';
import routes from './route/routes';

const app = express();
const port = 8080;

app.use(express.json());
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server: http://localhost:${port}`);
});
