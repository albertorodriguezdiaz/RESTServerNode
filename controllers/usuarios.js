const {response, request} = require('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuario');

const usuariosGet = async ( req = request, res = response) =>{

    // const query = req.query;
    // const {nombre, edad} = req.query;
    const { limite=5, desde=0 } = req.query;
    // const peticion = { estado:false };

    // const usuarios = await Usuario.find(peticion)
    //     .skip(Number(desde))
    //     .limit(Number(limite));

    // const total = await Usuario.countDocuments(peticion);

    // const resp = await Promise.all([
    const [total, usuarios] = await Promise.all([
        Usuario.countDocuments(),
        Usuario.find()
            .skip(Number(desde))
            .limit(Number(limite))
    ])

    res.json({
        total,
        usuarios
    });

}



const usuariosPost = async ( req = request, res = response) =>{

    
    const { nombre, correo, password, rol} = req.body;
    const usuario = new Usuario({ nombre, correo, password, rol});

    // Encriptar password
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);

    // Guardar en la DB
    await usuario.save(); 

    // res.json({
    //     usuario
    // });
    res.json(usuario);

}



const usuariosPut = async ( req, res = response) =>{

    const {id} = req.params;
    const {password, google, correo, ...usuarioBody} = req.body;

    // Todo validad con la DB
    if (password) {
        const salt = bcryptjs.genSaltSync();
        usuarioBody.password = bcryptjs.hashSync(password, salt);
    }

    const usuario = await Usuario.findByIdAndUpdate(id, usuarioBody, {new: true});

    res.json({
        msg: 'put API - Controlador',
        usuario
    });
}



const usuariosPatch = ( req, res = response) =>{
    res.json({
        msg: 'patch API - Controlador'
    });

}



const usuariosDelete = async ( req, res = response) =>{

    const {id} = req.params;

    // const usuario = await Usuario.findByIdAndDelete(id);
    const usuario = await Usuario.findByIdAndUpdate( id, { estado: false } );

    res.json({
        usuario
    });

}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
}