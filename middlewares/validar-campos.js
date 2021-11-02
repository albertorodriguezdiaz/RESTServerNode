const {validationResult} = require('express-validator');

const validarCampos = (req, res, next) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }

    //  Pasar al siguiente validador - Middlewares
    next();

}

module.exports = {
    validarCampos,
}