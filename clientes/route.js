import { Router } from 'express';
import * as clientes from './logica.js'

const routes = new Router();

// GET: se utiliza para solicitar un recurso a un servidor.
// POST: se utiliza para enviar datos al servidor para su procesamiento o almacenamiento. 
// PUT: se utiliza para actualizar un recurso en el servidor.
// DELETE: se utiliza para eliminar un recurso del servidor. 
// PATCH: se utiliza para actualizar parcialmente un recurso en el servidor. 
// OPTIONS: se utiliza para obtener información sobre las opciones y capacidades de comunicación disponibles para un recurso determinado en el servidor.

// Add routes
routes.get('/cliente/obtenerCliente/', clientes.obtener_clientes);
routes.post('/cliente/crearCliente/', clientes.crear_cliente);
routes.patch('/cliente/actualizarCliente/', clientes.actualizar_cliente);
routes.delete('/cliente/eliminarCliente/', clientes.eliminar_cliente);

export default routes;
