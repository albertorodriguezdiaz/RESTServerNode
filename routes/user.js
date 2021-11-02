const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');
const { esRolValido, emailExiste, existeUsuarioById } = require('../helpers/db-validators');

// const {usuariosGet} = require('../controllers/usuarios');
const routes = require('../controllers/usuarios');
const router = Router();

router.get('/', routes.usuariosGet);


router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe ser de mas de 6 caracteres').isLength({min:6}),
    // check('correo', 'El correo no es valido').isEmail(),
    check('correo').custom(emailExiste),
    // check('rol', 'No es un rol valido').isIn(['ADMIN_ROLE','USER_ROLE']),
    check('rol').custom(esRolValido),
    validarCampos
], routes.usuariosPost);


router.put('/:id', [
    check('id', 'no es un ID valido').isMongoId(),
    check('id').custom(existeUsuarioById),
    check('rol').custom(esRolValido),
    validarCampos
], routes.usuariosPut);


router.patch('/:id', routes.usuariosPatch);


router.delete('/:id', [
    check('id', 'no es un ID valido').isMongoId(),
    check('id').custom(existeUsuarioById),
    validarCampos
],routes.usuariosDelete);

module.exports = router;