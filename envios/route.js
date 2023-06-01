import { Router } from 'express';
import * as envios from './logica.js'

const routes = new Router();


// GET: se utiliza para solicitar un recurso a un servidor.
// POST: se utiliza para enviar datos al servidor para su procesamiento o almacenamiento. 
// PUT: se utiliza para actualizar un recurso en el servidor.
// DELETE: se utiliza para eliminar un recurso del servidor. 
// PATCH: se utiliza para actualizar parcialmente un recurso en el servidor. 
// OPTIONS: se utiliza para obtener información sobre las opciones y capacidades de comunicación disponibles para un recurso determinado en el servidor.


// Add routes
routes.get('/envios/catalogo/', envios.catalogo_deparatamento);
routes.get('/envios/obtener/', envios.obtener);
routes.post('/envios/crear/', envios.crear)
routes.delete('/envios/eliminar/',envios.eliminar);
routes.patch('/envios/actualizar/', envios.actualizar);

export default routes;
