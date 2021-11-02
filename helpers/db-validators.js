const Role = require('../models/role');
const Usuario = require('../models/usuario');


const esRolValido = async (rol='') =>{
    const existeRol = await Role.findOne({rol});
    if (!existeRol) {
        throw new Error(`El rol ${rol} no esta registrado en la DB`)
    }
}

// Verificar si el correo existe
const emailExiste = async (correo='') =>{
    const existeCorreo = await Usuario.findOne({correo});
    if (existeCorreo) {
        throw new Error(`El correo ${correo} ya existe en la DB`)
    }
}

// Verificar si existe ID
const existeUsuarioById = async (id) =>{
    const existeUsuario = await Usuario.findById(id);
    if (!existeUsuario) {
        throw new Error(`El id> ${id} no existe`)
    }
}

module.exports = {
    esRolValido,
    emailExiste,
    existeUsuarioById
}