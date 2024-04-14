const randomString = require('randomstring');
const model = require('../models');
const sendToWebhook = require('../utils/api');

const insertRandomUserJob = async () => {
    const userName = randomString.generate({
        length: 10,
        charset: 'alphabetic',
        readable: true,
    })

    await model.create({userName});
}

const updateUserTableJob = async () => {
    await sendToWebhook('updateUserTable');
}

module.exports = {
    insertRandomUserJob,
    updateUserTableJob,
}