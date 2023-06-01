import { Router } from 'express';
import * as productos  from './logica.js'

const routes = new Router();


// GET: se utiliza para solicitar un recurso a un servidor.
// POST: se utiliza para enviar datos al servidor para su procesamiento o almacenamiento. 
// PUT: se utiliza para actualizar un recurso en el servidor.
// DELETE: se utiliza para eliminar un recurso del servidor. 
// PATCH: se utiliza para actualizar parcialmente un recurso en el servidor. 
// OPTIONS: se utiliza para obtener información sobre las opciones y capacidades de comunicación disponibles para un recurso determinado en el servidor.

routes.get('/productos/obtener/', productos.obtener);
routes.post('/productos/crear/', productos.crear);
routes.patch('/productos/actualizar/', productos.actualizar);
routes.delete('/productos/eliminar/', productos.eliminar);

export default routes;
