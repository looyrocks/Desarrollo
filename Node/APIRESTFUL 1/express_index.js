const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/courses',(req, res) =>{
       // res.send(JSON.stringify([1, 2, 3, 5]));
        res.send([1, 2, 3]);
        res.end();
});

app.listen(3000, () => console.log('Listening on port 3000...'));
