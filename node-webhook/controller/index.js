const routineService = require('../service');

const processWebhook = async (req, res, next) => {
    const { data: event } = req.body;
    try {
        await routineService.verify(event);
        res.sendStatus(200);
    } catch (e) {
        switch (e.message) {
            case 'INVALID_ROUTINE':
                res.status(400).json({'message': 'Invalid routine'})
                break;
            default:
                next(e);
                break;
        }
        
    }
};

module.exports = {
    processWebhook,
};