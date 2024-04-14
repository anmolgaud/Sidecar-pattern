const axios = require('axios');

const sendToWebhook = async (routineName) => {
    try {
        await axios.post('http://localhost:3001/routine-webhook', {
            headers: {'Content-Type': 'application/json'},
            data: {
                routine_name: routineName,
            }
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = sendToWebhook;