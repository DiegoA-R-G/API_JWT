const bcryptjs = require('bcryptjs');
const User = require('../models/users.models');

const getUser = async (req, res) => {

    const allUsers = await User.find();

    res.send({
        "ok": 200,
        allUsers
    }
    )
}

const postUser = async (req, res) => {

    const { identificacion, nombre, apellidos, direccion, telefono, email, password, role } = req.body;
    const user = new User({ identificacion, nombre, apellidos, direccion, telefono, email, password, role });

    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt);

    await user.save();

    res.send({
        "ok": 200,
        user
    })
}

const putUser = async (req, res) => {

    const paramts = req.params.id;
    const { identificacion, nombre, apellidos, direccion, telefono, email, password } = req.body;

    const userUpdate = await User.findByIdAndUpdate(paramts, { identificacion, nombre, apellidos, direccion, telefono, email, password });

    res.send({
        "ok": 200,
        "msg": "Usuario actualizado exitosamente"
    }
    )
}

const deleteUser = async (req, res) => {

    const id_user = req.params.id;
    // const deleteUser = await User.findByIdAndDelete( id_user);

    const estado = true;

    const userUpdate = await User.findByIdAndUpdate(id_user, { estado });

    res.send({
        "ok": 200,
        "msg": "Usuario eliminado"
    }
    )
}


const GetUserById = async (req, res) => {

    const { id } = req.params;

    const data = await User.find({ _id: id });

    res.json({
        "ok": 200,
        data
    })
}


module.exports = {
    getUser,
    postUser,
    putUser,
    deleteUser,
    GetUserById
}