
const { Router } = require('express');
const { check } = require('express-validator');

const { validatorPath, EmailExisting, IdentificationExisting } = require('../middlewares/validator')

const { getUser, postUser, putUser, deleteUser, GetUserById} = require('../controllers/usersController');


const route = Router();

route.get('/', getUser);

route.post('/', [ 
    // IDentificacion
    check('identificacion', 'El documento, no tiene un tipado aceptado').isInt(),
    check('identificacion', 'El documento es requerido').not().isEmpty(),
    check('identificacion', 'Al documento, se espera una longitud minima de 8 caracteres y maxima de 10 caracteres').isLength({min:8, max:10}),
    check('identificacion').custom ( IdentificationExisting ),
    // Nombre
    check('nombre', 'El nombre es requerido').not().isEmpty(),
    // Apellido
    check('apellidos', 'El apellido es requerido').not().isEmpty(),
    // Direcion
    check('direccion', 'La dirección es requerida').not().isEmpty(),
    // telefono
    check('telefono', 'El telefono no puede ir vacio').not().isEmpty(),
    // Email
    check('email', 'El email no es aceptable').isEmail(),
    check('email').custom( EmailExisting ),
    // Contraseña
    check('password', 'La contraseña debe tener minimo 8 caracteres').isLength({min:8}),
    validatorPath
], postUser);

route.put('/:id', putUser);

route.delete('/:id', deleteUser);

route.get('/userById/:id', GetUserById);


module.exports = route;


