const model = require('../model/index');

const updateUserTable = async () => {
    await model.updateUserTable();
};

module.exports = {
    updateUserTable,
}