const express = require('express');
const db = require('../config/db')
const router = express.Router();
const lista = require('../config/data.js')

router.get("/", async (req, res) => {
    try {
        
        const carrito = lista
        res.status(200).json({ status: 200, mensaje: carrito });
    } catch (error) {
        console.log(error);

    }

});

router.delete("/deleteAll", async (req, res) => 
{
    try {
        lista.length=0
        res.status(200).json({status: 200})
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;