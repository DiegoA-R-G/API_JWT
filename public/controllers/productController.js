const bcryptjs = require('bcryptjs');
const Proveedor = require('../models/product');

const getProveedor = async (req, res) => {

    const allProveedores = await Proveedor.find();

    res.send({
        "ok": 200,
        allProveedores
    }
    )
}

const postProveedor = async (req, res) => {

    const { identificacion, nombre, apellidos, direccion, telefono, empresa, codigoEmpresa,  estado } = req.body;
    const Proveedor = new Proveedor({ identificacion, nombre, apellidos, direccion, telefono, empresa, codigoEmpresa, estado });

    // const salt = bcryptjs.genSaltSync();
    // user.password = bcryptjs.hashSync( password,salt);

    await user.save();

    res.send({
        "ok": 200,
        Proveedor
    })
}

const putProveedor = async (req, res) => {

    const paramts = req.params.id;
    const { identificacion, nombre, apellidos, direccion, telefono, empresa, codigoEmpresa,  estado } = req.body;

    const ProveedorUpdate = await Proveedor.findByIdAndUpdate(paramts, { identificacion, nombre, apellidos, direccion, telefono, empresa, codigoEmpresa,  estado });

    res.send({
        "ok": 200,
        "msg": "Proveedor actualizado exitosamente"
    }
    )
}

const deleteProveedor = async (req, res) => {

    const id_Proveedor = req.params.id;
    // const deleteUser = await User.findByIdAndDelete( id_user);

    const estado = true;

    const ProveedorUpdate = await Proveedor.findByIdAndUpdate(id_Proveedor, { estado });

    res.send({
        "ok": 200,
        "msg": "Proveedor eliminado"
    }
    )
}


const GetProveedorById = async (req, res) => {

    const { id } = req.params;

    const data = await Proveedor.find({ _id: id });

    res.json({
        "ok": 200,
        data
    })
}


module.exports = {
    getProveedor,
    postProveedor,
    putProveedor,
    deleteProveedor,
    GetProveedorById
}