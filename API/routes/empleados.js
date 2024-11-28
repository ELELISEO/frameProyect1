const express = require('express');
const db = require('../config/db')
const router = express.Router();
const lista = require('../config/data.js')

router.post('/agregar', async (req, res) => {
    try {
        const { nombre, apellido, contrasena } = req.body
        const query = await db.query(`INSERT INTO empleados (nombre, apellido, contrasena) VALUES ('${nombre}','${apellido}',${contrasena});`)
            res.status(200).json({ status: 200, mensaje: query });
        } catch (error) {
            console.error(error);
            res.status(500).json({ status: 500, mensaje: 'Error en el servidor' });
        }
 }
 
)
router.get("/empleados", async (req, res) => {
    try {
        const query = await db.query(`SELECT * FROM empleados;`)
            res.status(200).json({ status: 200, mensaje: query});
    } catch (error) {
        console.log(error);
    }   
});

router.put('/edit/:id', async (req, res) => {
    const id = req.params.id; 
    const { nombre, apellido, contrasena } = req.body; 
  
    try {
      const updateQuery = `
        UPDATE empleados 
        SET nombre = ?, apellido = ?, contrasena = ?
        WHERE id = ?;
      `;
      
      const [result] = await db.execute(updateQuery, [
        nombre, 
        apellido, 
        contrasena,   
        id
      ]);
  
      const selectQuery = 'SELECT * FROM empleados';
      const [rows] = await db.query(selectQuery, [id]);
  
      if (rows.length === 0) {
        return res.status(404).json({ error: 'empleado no encontrado' });
      }
  
      res.status(200).json({
        message: 'empleado actualizado correctamente',
        data: rows[0] 
      });
    } catch (error) {
      console.error('Error al actualizar el empleado:', error);
      res.status(500).json({ error: 'Hubo un error al actualizar el empleado' });
    }
  });

  router.delete("/deleteId/:id", async (req, res) => 
    {
        try {
            const { id } = req.params
            if (isNaN(id)) {
                return res.status(400).json({ status: 400, mensaje: 'ID no válido' });
              }
          
            const query = `DELETE FROM empleados WHERE id = ${id}`;
            const result = await db.query(query, [id]);
            if (result.rowCount > 0) {
                return res.status(200).json({ status: 200, mensaje: "Empleado eliminado correctamente" });
              } else {
                return res.status(404).json({ status: 404, mensaje: "Empleado no encontrado" });
            }
          } catch (error) {
            console.log(error);
            res.status(500).json({ status: 500, mensaje: "Error interno del servidor" });
          }
    })
module.exports = router;