const express = require('express');
const db = require('../config/db')
const router = express.Router();
const lista = require('../config/data.js')

router.get("/inventario", async (req, res) => {
    try {
        const query = await db.query(`SELECT * FROM inventario;`)
        
            res.status(200).json({ status: 200, mensaje: query});
    } catch (error) {
        console.log(error);
    }   
});

module.exports = router;