const { Schema, model } = require('mongoose');

const UserModel = new Schema({

    identificacion:{
        type:Number,
        required:["El numero de identificación es obligatorio!"],
        unique: true
    },
    nombre:{
        type:String,
        required:["El nombre es obligatorio!"]
    },
    apellidos:{
        type:String,
        required:["El apellido es obligatorio!"]
    },
    direccion:{
        type:String,
        required:["La dirección es obligatoria!"]
    },
    telefono:{
        type:String,
    },
    email:{
        type:String,
        required:["El usuario es obligatorio!"],
        unique: true
    },
    password:{
        type:String,
        required:["La password es obligatoria!"]
    },
    estado:{
        type:Boolean,
        default:false
    }
})

module.exports = model('user', UserModel);