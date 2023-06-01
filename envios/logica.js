import db from '../db/db.js'
export const catalogo_deparatamento = async (req, res) => {
  try {
    let catalogos = await db('ati.catalogo_departamentos')
    res.json(catalogos)
  } catch (error) {
    console.log('catalogo_deparatamento')
    res.status(500)
  }
}

export const obtener = async (req, res) => {
  try {
    let envios = await
      db({ dped: 'ati.detalles_pedidos' })
        .join({ prod: 'ati.productos' }, 'dped.id_producto', 'prod.id_producto')
        .join({ cl: 'ati.cliente' }, 'cl.id_cliente', 'dped.id_cliente')
        .join({ cdep: 'ati.catalogo_departamentos' }, 'cdep.id_departamento', 'dped.id_departamento')
        .select(
          'dped.id_pedido',
          'dped.id_producto',
          'dped.id_cliente',
          'dped.id_departamento',
          'dped.cantidad',
          'dped.precio_unitario',
          'dped.costo_envio',
          'dped.fecha_envio',
          'cl.nombre as nombre_cliente',
          'cl.direccion',
          'cl.telefono',
          'prod.nombre_producto',
          'prod.descripcion',
          'prod.precio',
          'prod.cantidad_stock',
          'cdep.nombre as nombre_departamento',
        )
    res.status(200).json(envios)
  } catch (error) { res.status(500) }

}

export const crear = async (req, res) => {
  try {
    let datos = { ...req.body.params }

    let envio = await db({ env: 'ati.detalles_pedidos' })
      .insert(datos, ['*'])

    res.status(200).json(envio)
  } catch (error) { res.status(500) }
}

export const eliminar = async (req, res) => {
  try {
    let respuesta = await
      db('ati.detalles_pedidos')
        .del()
        .where('id_pedido', req.query.id_pedido)
        .returning('*')
    res.json(respuesta)
  } catch (error) { res.status(500) }
}

export const actualizar = async (req, res) => {
  try {
    let datos = { ...req.body.params }
    delete datos.id_pedido

    let [respuesta] = await
      db('ati.detalles_pedidos')
        .update(datos, '*')
        .where('id_pedido', req.body.params.id_pedido)

    res.json(respuesta)
  } catch (error) { res.status(500) }
}