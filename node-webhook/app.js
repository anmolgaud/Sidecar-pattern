const express = require('express');
const dbRouter = require('./routes');
const eventEmitter = require('./utils/event-emitter');
const app = express();

app.use(express.json());


app.use(dbRouter);
app.use((error, req, res, next) => {
    console.log(error);
    res.sendStatus(500);
});

app.listen(3001, 'localhost', () => {
    console.log('webhook listening on port: 3001');
});