const os = require('os');
var TotalMem = os.totalmem();
var LibreMem = os.freemem();

console.log('Mi memoria total es: ' + TotalMem);
console.log('Mi memoria libre es: ' + LibreMem + '\n');

//Template string
console.log(`Uso con Templates`);
console.log(`Mi memoria total es: ${TotalMem}`);
console.log(`Mi memoria libre es: ${LibreMem} \n`);