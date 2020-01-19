const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
    res.status(200).send("This is the home page");
});

const port = 3000;

app.listen(port, () => {
    console.log(`Listenning on port ${port}`);
});

