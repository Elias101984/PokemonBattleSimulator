import express from 'express';
import bodyParser from 'body-parser';
import battleRoutes from './routes/battle';

const app = express();
app.use(bodyParser.json());
app.use(battleRoutes);

export default app;
