const mongoose = require('mongoose');

// Conectar a la base de datos
mongoose.connect('mongodb://localhost:27017/miBaseDeDatos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Definir un esquema y un modelo
const UsuarioSchema = new mongoose.Schema({
  nombre: String,
  email: String,
});

const Usuario = mongoose.model('Usuario', UsuarioSchema);

// Crear un nuevo usuario
const nuevoUsuario = new Usuario({
  nombre: 'Juan',
  email: 'juan@example.com',
});

nuevoUsuario.save().then(() => console.log('Usuario guardado!'));