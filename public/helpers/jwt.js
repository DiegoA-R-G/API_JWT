const jwt = require("jsonwebtoken");

const generarjwt = (id, identificacion, nombre, apellidos, email, role) => {

  const payload = { id, identificacion, nombre, apellidos, email, role };

  return new Promise((resolve, rejetc) => {
    jwt.sign(payload, process.env.SECRETKEY, {
      expiresIn: '50m'
    }, (err, token) => {
      if (err) {
        rejetc("Error al generar el token");
      } else {
        resolve(token)
      }
    });
  });
};

module.exports = {
  generarjwt,
};
