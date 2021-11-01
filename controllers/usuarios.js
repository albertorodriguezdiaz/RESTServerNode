const {response} = require('express');

const usuariosGet = ( req, res = response) =>{
    res.json({
        msg: 'get API - Controlador'
    });

}
const usuariosPost = ( req, res = response) =>{
    const {nombre, edad} = req.body;

    res.json({
        msg: 'post API - Controlador',
        nombre, 
        edad
    });

}
const usuariosPut = ( req, res = response) =>{
    res.json({
        msg: 'put API - Controlador',
        
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