const fs = require('fs');
//lectura asíncrona
const files = fs.readdirSync('./');
console.log(files);

//lectura sincrona
fs.readdir('#', function(err, files){
    if (err) console.log('Error', err);
    else console.log('Result', files);
});