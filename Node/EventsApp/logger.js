const EventEmitter = require('events');
var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
    log(messages){  //method instead function
        //send an HTTP request
        console.log(messages);
        //Raise an event
        this.emit('messageLogged', { id: 1, url: 'http://'}); 
}
}


module.exports = Logger;