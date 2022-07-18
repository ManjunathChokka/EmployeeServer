const express = require('express');
const app = express();

var cors = require('cors');
const port = 3000;
app.use(
    cors({
        origin: '*',
    })
);
app.get('/', (req, res) => {
    // res.send('Hello World!');
    res.json([
        { eID: 'e12345', name: 'ABCD', email: 'abc@abc.com', experience: 3 },
        { eID: 'e23456', name: 'PQRS', email: 'xyz@xyz.com', experience: 4 },
    ]);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
