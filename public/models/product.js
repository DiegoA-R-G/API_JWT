const { Schema, model } = require('mongoose');

const ProveedorModel = new Schema({

    identificacion: {
        type: Number,
        required: ["El numero de identificación es obligatorio!"],
        unique: true
    },
    nombre: {
        type: String,
        required: ["El nombre es obligatorio!"]
    },
    apellidos: {
        type: String,
        required: ["El apellido es obligatorio!"]
    },
    direccion: {
        type: String
    },
    telefono: {
        type: String
    },
    empresa:{
        type:String
    },
    codigoEmpresa: {
        type: Boolean
    },
    password:{
        type:String,
        required:["La password es obligatoria!"]
    },
    estado:{
        type: Boolean,
        default: false
    }
})

module.exports = model('Proveedor', ProveedorModel);