const express = require('express');
const db = require('../config/db')
const router = express.Router();
const lista = require('../config/data.js')

router.post('/almacen', async (req, res) => {
    try {
        const { contacto, producto, proveedor, precio, cantidad  } = req.body
        const query = await db.query(`INSERT INTO almacen (contacto, producto, proveedor, precio) VALUES (${contacto},'${producto}','${proveedor}',${precio});`)
        const query2 = await db.query(`INSERT INTO inventario (producto, stock, venta_cantidad, almacen_almacen, total_carrito) VALUES ('${producto}', 0 , 0, ${cantidad},${precio});`)
            res.status(200).json({ status: 200, mensaje: query });
        } catch (error) {
            console.error(error);
            res.status(500).json({ status: 500, mensaje: 'Error en el servidor' });
        }
 }
 
)

router.get("/almacen/proveedores", async (req, res) => {
    try {
        const query = await db.query(`SELECT * FROM almacen;`)
            res.status(200).json({ status: 200, mensaje: query});
    } catch (error) {
        console.log(error);
    }   
});

router.delete("/almacen/deleteId/:id", async (req, res) => 
    {
        try {
            const { id } = req.params
            if (isNaN(id)) {
                return res.status(400).json({ status: 400, mensaje: 'ID no válido' });
              }
          
            const query = `DELETE FROM almacen WHERE id = ${id}`;
            const result = await db.query(query, [id]);
            if (result.rowCount > 0) {
                return res.status(200).json({ status: 200, mensaje: "Proveedor eliminado correctamente" });
              } else {
                return res.status(404).json({ status: 404, mensaje: "Proveedor no encontrado" });
            }
          } catch (error) {
            console.log(error);
            res.status(500).json({ status: 500, mensaje: "Error interno del servidor" });
          }
    })

        router.put('/almacen/edit/:id', async (req, res) => {
          const id = req.params.id; 
          const { contacto, producto, proveedor, precio } = req.body; 
        
          try {
            const updateQuery = `
              UPDATE almacen 
              SET contacto = ?, producto = ?, proveedor = ?, precio = ?
              WHERE id = ?;
            `;
            
            const [result] = await db.execute(updateQuery, [
              contacto, 
              producto, 
              proveedor, 
              precio,  
              id
            ]);
        
            const selectQuery = 'SELECT * FROM almacen';
            const [rows] = await db.query(selectQuery, [id]);
        
            if (rows.length === 0) {
              return res.status(404).json({ error: 'Proveedor no encontrado' });
            }
        
            res.status(200).json({
              message: 'Proveedor actualizado correctamente',
              data: rows[0] 
            });
          } catch (error) {
            console.error('Error al actualizar el proveedor:', error);
            res.status(500).json({ error: 'Hubo un error al actualizar el proveedor' });
          }
        });
        
        
      
        router.get("/producto/:id", async (req, res) => {
            try {
                const { id } = req.params;
                const query = await db.query(`SELECT cantidad, precio FROM almacen WHERE id = '${id}';`)
                if (query.length > 0) {
                    res.status(200).json({ status: 200, mensaje: query[0] });
                } else
                    res.status(401).json({ status: 401, mensaje: "Producto no encontrado" });
            } catch (error) {
                console.log(error);
            }
        
        });
        
          router.put('/almacen/cantidad/:id', async (req, res) => {
            const id = req.params.id; // ID del producto que se actualizará
            const { cantidad } = req.body; // Extraemos la cantidad del cuerpo de la solicitud
        
            if (isNaN(cantidad) || cantidad < 0) {
                return res.status(400).json({ error: 'Cantidad debe ser un número válido y mayor o igual a 0' });
            }
        
            try {
                // Actualizamos la cantidad en la base de datos
                const updateQuery = `
                    UPDATE almacen 
                    SET cantidad = ? 
                    WHERE id = ?;
                `;
                
                const [result] = await db.execute(updateQuery, [cantidad, id]);
                console.log('Resultado UPDATE almacen:', result);

                if (result.affectedRows === 0) {
                  return res.status(404).json({ error: 'Producto no encontrado' });
              }

                const updateQuery2 = `
                    UPDATE inventario 
                    SET almacen_almacen = ? 
                    WHERE id = ?;
                `;
        
                const [result2] = await db.execute(updateQuery2, [cantidad, id]);
                console.log(result);
                
        
                // Verificamos si se actualizó correctamente
                
                if (result2.affectedRows === 0) {
                  return res.status(404).json({ error: 'Producto no encontrado' });
              }
        
                // Seleccionamos la cantidad actualizada para devolverla como respuesta
                const selectQuery = 'SELECT cantidad FROM almacen WHERE id = ?';
                const [rows] = await db.query(selectQuery, [id]);
        
                res.status(200).json({
                    message: 'Cantidad actualizada correctamente',
                    data: rows[0] // Devolvemos la cantidad actualizada
                });
        
            } catch (error) {
                console.error('Error al actualizar la cantidad:', error);
                res.status(500).json({ error: 'Hubo un error al actualizar la cantidad del producto' });
            }
        });
        
          

module.exports = router;