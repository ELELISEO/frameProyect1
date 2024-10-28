const express = require('express');
const db = require('./config/db.js')
const app = express();
const port = 5000;
const cors = require('cors');

app.use(cors());
// Middleware para parsear JSON
app.use(express.json());

// Ruta de ejemplo
app.get('/api/mensaje', async (req, res) => {
    const query = await db.query(`SELECT NOMBRE_U FROM usuarios`)
    res.json({ mensaje: query });
});
app.post('/api/mensaje', async (req, res) => {
    try {
        const { USUARIO, CONTRASEÑA } = req.body
        console.log(req.body);
        
        const query = await db.query(`SELECT NOMBRE_U FROM usuarios WHERE NOMBRE_U = '${USUARIO}' AND CONTRASEÑA = ${CONTRASEÑA};`)
        if (query.length > 0) {
            res.status(200).json({ status: 200, mensaje: query });
        } else
            res.status(401).json({ status: 401, mensaje: "usuario no encontrado" });
    } catch (error) {
        console.log(error);

    }
});

// Arrancar el servidor
app.listen(port, () => {
    console.log(`API escuchando en http://localhost:${port}`);
});