const { Router } = require('express');
const { check } = require('express-validator');
// const {usuariosGet} = require('../controllers/usuarios');
const routes = require('../controllers/usuarios');
const router = Router();

router.get('/', routes.usuariosGet);

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe ser de mas de 6 caracteres').isLength({min:6}),
    check('correo', 'El correo no es valido').isEmail(),
    check('rol', 'No es un rol valido').isIn(['ADMIN_ROLE','USER_ROLE']),
], routes.usuariosPost);

router.put('/:id', routes.usuariosPut);

router.patch('/', routes.usuariosPatch);

router.delete('/', routes.usuariosDelete);

module.exports = router;