const EventEmitter = require('events');


//Llamado a modulo
const Logger = require('./logger'); //llamada a la clase
const logger = new Logger();        //crear un objeto

//Register a listener
logger.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});

logger.log('Hello');  //llamar al método de la clase



