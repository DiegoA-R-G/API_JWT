const express = require('express')
const cors = require('cors')
const { DBConection } = require('../public/db/config')

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.DbConexionMongo();
        this.middlewares();
        this.route();
    }
    DbConexionMongo(){
        DBConection();
    }
    middlewares(){
        this.app.use(cors())

        this.app.use( express.json() )
        this.app.use( express.static('public') )
    }

 
    route(){
       
        this.app.use( '/api/auth/' , require('../public/routes/auth.routes.js'))
        this.app.use( '/api/user/' , require('../public/routes/users.routes.js'))
        this.app.use( '/api/product/' , require('../public/routes/product'))
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log("Servidor corriendo en: http://localhost:"+this.port)
        })
    }
}

module.exports = Server;


