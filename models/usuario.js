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
    rol: {
        type: String,
        require: true,
        emun: ['ADMIN_ROLE', 'USER_ROLE']
    },
    img: {
        type: String,
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    },

});

UsuarioSchema.methods.toJSON = function(){
    // Quitar version y pasword y enviar todo lo demas en la variable usuario
    const {__v, password, ...usuario} = this.toObject();
    return usuario;
}

module.exports = model('Usuarios', UsuarioSchema);