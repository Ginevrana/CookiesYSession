const {check, body} = require('express-validator');

module.exports = [
    check('nombre')
    .notEmpty().withMessage('El nombre es obligatorio'),

    check('email')
    .isEmail().withMessage('Debes ingresar un email válido'),

    check('colorFondo')
    .notEmpty().withMessage('Debes seleccionar un color'),
    
    check('edad')
    .notEmpty().withMessage('Debes ingresar su edad').bail()
    .isNumeric().withMessage('Debe ingresar un numero')
]