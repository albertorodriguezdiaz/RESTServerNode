const express = require('express');

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        //Middlewares
        this.middlewares();

        // Ruta de mi aplicacion        
        this.routes();
    }

    middlewares(){
        // Directorio Publico
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.get('/', (req, res) =>{
            res.send('hello!');
        });
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto: ', this.port);
        });
    }
}

module.exports = Server;