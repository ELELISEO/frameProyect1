const express = require('express');
const db = require('../config/db')
const router = express.Router();
const lista = require('../config/data.js')

router.get("/", async (req, res) => {
    try {
        const carrito = lista;
        res.status(200).json({ status: 200, mensaje: carrito });
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: 500, mensaje: 'Error en el servidor' });
    }
});

router.post("/insertar", async (req, res) => {
    try {
        const carrito = lista;

        for (const item of carrito) {
            const { id, producto, stock, venta, almacen, total } = item;
            await db.query(
                `INSERT INTO inventario (id_carrito, producto, stock, venta_cantidad, almacen_almacen, total_carrito) VALUES (?, ?, ?, ?, ?, ?)`,
                [id, producto, stock, venta, almacen, total]
            );
        }

        res.status(200).json({ status: 200, mensaje: 'Datos insertados correctamente' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: 500, mensaje: 'Error al insertar datos' });
    }
});


module.exports = router;