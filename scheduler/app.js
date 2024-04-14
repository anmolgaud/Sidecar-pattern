const schedule = require('node-schedule');
const jobs = require('./jobs');

const insertRandomUserJob = schedule.scheduleJob('* * * * *', jobs.insertRandomUserJob);
const updateUserTableJob = schedule.scheduleJob('*/5 * * * *', jobs.updateUserTableJob);