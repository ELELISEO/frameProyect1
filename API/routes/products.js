const express = require('express');
const db = require('../config/db')
const router = express.Router();
const lista = require('../config/data.js')

router.get("/producto/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const query = await db.query(`SELECT producto, precio FROM productos WHERE id = '${id}';`)
        if (query.length > 0) {
            res.status(200).json({ status: 200, mensaje: query[0] });
        } else
            res.status(401).json({ status: 401, mensaje: "Producto no encontrado" });
    } catch (error) {
        console.log(error);
    }

});

router.post('/lista', async (req, res) => {
    try {
        const venta = req.body
        lista.push(venta)
        res.status(200).json({ status: 200, mensaje: "se guardo en la lista" });
    } catch (error) {
        console.log(error);

    }
});

module.exports = router;