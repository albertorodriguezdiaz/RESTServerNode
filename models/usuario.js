const { Schema, model} = require('mongoose');

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        require: [true, 'El nombre es obligarorio']
    },
    correo: {
        type: String,
        require: [true, 'El correo es obligarorio'],
        unique: true
    },
    password: {
        type: String,
        require: [true, 'El password es obligarorio'],
        unique: true
    },
    img: {
        type: String,
    },
    rol: {
        type: String,
        require: true,
        emun: ['ADMIN_ROLE', 'USER_ROLE']
    },
    estado: {
        type: Boolean,
        require: true,
    },
    google: {
        type: Boolean,
        require: false,
    },

});

module.exports = model('Usuarios', UsuarioSchema);