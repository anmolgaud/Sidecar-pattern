const routineMapping = {
    'updateUserTable': 'updateUserTableRoutine',
};

const eventEmitter = require('../utils/event-emitter');

const verify = async (event) => {
    const { routine_name: routineName } = event;
    if (!(routineName in routineMapping)) throw new Error('INVALID_ROUTINE');
    eventEmitter.emit(routineMapping[routineName]);
    return;
}

module.exports = {
    verify,
}