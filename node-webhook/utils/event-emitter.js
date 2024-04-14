const EventEmitter = require('node:events');
const jobs = require('../jobs');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('updateUserTableRoutine', async () => {
    try {
        await jobs.updateUserTable();
    } catch (error) {
        console.log(error);
    }
});

module.exports =  myEmitter;