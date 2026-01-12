var url = 'http://mylogger.io/log';

function log(messages){
    //send an HTTP request
    console.log(messages);
}

module.exports = log;