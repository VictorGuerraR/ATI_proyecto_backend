import db from '../db/db.js'

export const obtener = async (req, res) => {
  try {
    let respuesta = await db('ati.productos')
    res.status(200).json(respuesta)
  } catch (error) {
    res.status(500)
  }
}

export const crear = async (req, res) => {
  try {
    delete req.body.params.id_producto
    let respuesta = await
      db('ati.productos')
        .insert(req.body.params)
    res.status(200).json(respuesta)
  } catch (error) { res.status(500) }

}

export const eliminar = async (req, res) => {
  try {
    let respuesta = await
      db('ati.productos')
        .where('id_producto', req.query.id_producto)
        .del()
    res.status(200).json(respuesta)
  } catch (error) { res.status(500) }
}

export const actualizar = async (req, res) => {
  try {
    let valores = { ...req.body.params }
    delete valores.id_producto
    let respuesta = await
      db('ati.productos')
        .update(valores)
        .where('id_producto', req.body.params.id_producto)
    res.status(200).json(respuesta)
  } catch (error) { res.status(500) }
}