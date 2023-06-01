import db from '../db/db.js'

export const obtener_clientes = async (req, res) => {
  try {
    const clientes = await db('ati.cliente')
    res.json(clientes)
  } catch (error) {
    res.status(500)
  }
}

export const crear_cliente = async (req, res) => {
  try {
    let cliente = await
      db('ati.cliente')
        .insert(req.body.params, ['*'])
    res.status(200).json(cliente)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const actualizar_cliente = async (req, res) => {
  try {
    let datos = { ...req.body.params }
    let cliente = await
      db('ati.cliente')
        .update({
          nombre: datos.nombre,
          direccion: datos.direccion,
          telefono: datos.telefono
        }, ['*'])
        .where({ 'id_cliente': datos.id_cliente })
    res.status(200).json(cliente)
  } catch (error) {
    res.status(500).json({ 500: error })
  }
}

export const eliminar_cliente = async (req, res) => {
  try {
    let eliminar = await
      db('ati.cliente')
        .where({ 'id_cliente': req.query.id_cliente }, ['*'])
        .del()
    res.status(200)
  } catch (error) {
    res.status(500).json(error)
  }
}
