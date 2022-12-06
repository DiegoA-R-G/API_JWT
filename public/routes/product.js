const { Router } = require('express');
const { check } = require('express-validator');
const { getProveedor, postProveedor, putProveedor, deleteProveedor, GetProveedorById } = require('../controllers/productController')

const { validatorPath, IdentificationExisting, EmpresaExisting } = require('../middlewares/validator')

const route = Router();

route.get('/', getProveedor);

route.post('/', [
    // IDentificacion
    check('identificacion', 'El documento, no tiene un tipado aceptado').isInt(),
    check('identificacion', 'El documento es requerido').not().isEmpty(),
    check('identificacion', 'Al documento debe tener 8 numeros ó 10 numeros como maximo').isLength({ min: 8, max: 10 }),
    check('identificacion').custom(IdentificationExisting),
    // Nombre
    check('nombre', 'El nombre es requerido').not().isEmpty(),
    // Apellido
    check('apellidos', 'El apellido es requerido').not().isEmpty(),
    // Direcion
    check('direccion', 'La direccion no puede ir vacia').not().isEmpty(),
    // telefono
    check('telefono', 'El telefono no puede ir vacio').not().isEmpty(),
    // Empresa
    check('empresa', 'El nombre de la empresa no puede estar vacia').not().isEmpty(),
    // Codigo
    // check('codigoEmpresa', 'El numero de la empresa no puede estar vacia').not().isEmpty(),
    // check('codigoEmpresa', 'Solo se admiten numeros').isInt(),
    // check('codigoEmpresa', 'El codigo asignado no es válido').isIn(['2211', '001']),
    // check('codigoEmpresa').custom(EmpresaExisting),
    // Contraseña
    check('password', 'La contraseña debe tener minimo 8 caracteres').isLength({min:8}),
    validatorPath
], postProveedor)

route.put('/', putProveedor)

route.delete('/', deleteProveedor)

route.get('/userById/:id', GetProveedorById);


module.exports = route;