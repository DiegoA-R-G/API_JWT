const { request, response } = require("express");
const bcryptjs = require("bcryptjs");

const User = require("../models/users.models");
const { generarjwt } = require("../helpers/jwt");

const postAuthentication = async (req = request, res = response) => {

  const { email, password } = req.body;
  try {
    const Usuario = await User.findOne({ email });
    if (!Usuario) {
      return res.status(400).json({
        msg: `El usuario no existe en la base de datos`,
      });
    }
    if (!Usuario.estado) {
      return res.status(400).json({
        msg: `Acceso denegado! el usuario esta inactivo`,
      });
    }
    const comparePassword = bcryptjs.compareSync(password, Usuario.password);
    if (!comparePassword) {
      return res.status(400).json({
        msg: `Acceso denegado! error en la contraseña`,
      });
    }
    const token = await generarjwt(
      Usuario._id,
      Usuario.identificacion,
      Usuario.nombre,
      Usuario.apellidos,
      Usuario.email,
      Usuario.role
    );

    res.json({
      ok: "ok",
      token,
    });
  } catch (error) {
    console.log("Error del servidor: " + error);
    res.status(500).json({
      msg: "Error 500! Comunicate con el administrador",
    });
    throw new Error(
      `Lo sentimos! se ha presentado un error en el servidor, comunicate con el administrador`
    );
  }
};

module.exports = {
  postAuthentication,
};
