const {response} = require('express');
const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator');
const Usuario = require('../models/usuario');

const usuariosGet = ( req, res = response) =>{

    // const query = req.query;
    const {nombre, edad} = req.query;

    res.json({
        msg: 'get API - Controlador',
        nombre,
        edad
    });

}
const usuariosPost = async ( req, res = response) =>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }

    const { nombre, correo, password, rol} = req.body;
    const usuario = new Usuario({ nombre, correo, password, rol});

    // Verificar si el correo existe
    const existeEmail = await Usuario.findOne({correo});
    if (existeEmail) {
        return res.status(400).json({
            msg: 'Ese correo ya existe'
        });
    }

    // Encriptar password
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);

    // Guardar en la DB
    await usuario.save(); 

    res.json({
        // msg: 'post API - Controlador',
        usuario
    });

}
const usuariosPut = ( req, res = response) =>{

    const {id} = req.params;

    res.json({
        msg: 'put API - Controlador',
        id        
    });
}
const usuariosPatch = ( req, res = response) =>{
    res.json({
        msg: 'patch API - Controlador'
    });

}
const usuariosDelete = ( req, res = response) =>{
    res.json({
        msg: 'delete API - Controlador'
    });

}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
}