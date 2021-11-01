const { Router } = require('express');
// const {usuariosGet} = require('../controllers/usuarios');
const routes = require('../controllers/usuarios');
const router = Router();

router.get('/', routes.usuariosGet);
router.post('/', routes.usuariosPost);
router.put('/', routes.usuariosPut);
router.patch('/', routes.usuariosPatch);
router.delete('/', routes.usuariosDelete);

module.exports = router;