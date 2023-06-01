import dotenv from 'dotenv'
import clientes from './clientes/route.js'
import envios from './envios/route.js'
import productos from './productos/route.js'
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';


dotenv.config()

const app = express();
app.use(cors({
  origin: 'http://localhost:4200' // Reemplaza con tu origen permitido
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(clientes);
app.use(envios);
app.use(productos);

//    app.use(json());

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});