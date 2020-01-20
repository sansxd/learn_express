require('dotenv').config()
//importando express
import express from 'express';
const port = process.env.PORT;
const morgan = require('morgan');
const cors = require('cors');
const app = express();

import { conexion } from './database';

//importacion de rutas
import authRoute from './routes/auth';
import tareasRoute from './routes/tareas';

//funcion que hace conexion a BD de mongo
conexion();

//middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.get('/', function(request, response) {
  console.log(request.body); // your JSON
  response.send(request.body); // echo the result back
});

//rutas middleware
app.use('/api/user', authRoute);
app.use('/api/tareas', tareasRoute);

app.listen(port, () => console.log(`servidor arriba en el puerto: ${port}!`));
