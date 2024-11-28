const express = require('express');
const db = require('./config/db.js')
const app = express();
const port = 5000;
const cors = require('cors');

const productsRouter = require("./routes/products.js")
const carritoRouter = require("./routes/carrito.js")
const almacenRoutes = require('./routes/almacen.js');
const empleadosRoutes = require('./routes/empleados.js');
const cobroRoutes = require('./routes/cobro.js');
const inventarioRputes = require('./routes/inventario.js')
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
        const { id, CONTRASEÑA } = req.body
        console.log(req.body);
        
        const query = await db.query(`SELECT id FROM admin WHERE id = '${id}' AND CONTRASEÑA = ${CONTRASEÑA};`)
        if (query.length > 0) {
            res.status(200).json({ status: 200, mensaje: query });
        } else
            res.status(401).json({ status: 401, mensaje: "usuario no encontrado" });
    } catch (error) {
        console.log(error);

    }
});

app.use("/products", productsRouter)
app.use("/carrito", carritoRouter)
app.use("/almacen", almacenRoutes)
app.use("/empleado", empleadosRoutes)
app.use("/cobro", cobroRoutes)
app.use("/inventario", inventarioRputes)

// Arrancar el servidor
app.listen(port, () => {
    console.log(`API escuchando en http://localhost:${port}`);
});