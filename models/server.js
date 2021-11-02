const express = require('express');
const cors = require('cors');
const {dbConnection} = require('../database/config');

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/restusers';

        // Conectar a la bse de datos
        this.conectarDB();
        
        //Middlewares
        this.middlewares();

        // Lectura y parseo del body
        this.app.use(express.json());

        // Ruta de mi aplicacion        
        this.routes();
    }

    async conectarDB(){
        await dbConnection();
    }


    middlewares(){
        // CORS
        this.app.use(cors());

        // Directorio Publico
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.usuariosPath, require('../routes/user'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto: ', this.port);
        });
    }
}

module.exports = Server;