const recentUserModel = require('./recentUserModel');

const create = async (params) => {
   await recentUserModel.sync();
   await recentUserModel.create(params);
};

module.exports = {
    create,
}