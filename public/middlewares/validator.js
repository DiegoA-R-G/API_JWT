const { validationResult } = require('express-validator');
const User = require('../models/users.models')

const validatorPath = (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors)
    }
    next()
}
const IdentificationExisting = async (identificacion = '') => {

    const documentExisting = await User.findOne({ identificacion });
    if (documentExisting) {
        throw new Error(`El documento: ${identificacion}, ya existe en la base de datos`);
    }
}
const EmailExisting = async (email = '') => {

    const emailExisting = await User.findOne({ email });
    if (emailExisting) {
        throw new Error(`El email: ${email}, ya existe en la base de datos`);
    }
}
const EmpresaExisting = async (codigoEmpresa = '') => {

    const empresaExisting = await Proveedor.findOne({ codigoEmpresa });
    if (empresaExisting) {
        throw new Error(`El proveedor: ${Proveedor}, ya existe en la base de datos`);
    }
}
module.exports = {
    validatorPath,
    IdentificationExisting,
    EmailExisting,
    EmpresaExisting
}