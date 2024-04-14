const userModel = require('./userModel');
const { QueryTypes } = require('sequelize');
const sequelize = require('../utils/sequelize');

const updateUserTable = async () => {
    const date = new Date().toISOString();
    const transaction = await sequelize.transaction();
    try {
        const records = await sequelize.query('SELECT username As userName FROM recent_users', { type: QueryTypes.SELECT, transaction});
        await userModel.bulkCreate(records, {transaction});
        await sequelize.query('TRUNCATE TABLE recent_users', {type: QueryTypes.DELETE, transaction});
        await transaction.commit()
        console.info(`updateUserTableJob executed on ${date}`);
    } catch (e) {
        await transaction.rollback();
    }
}

module.exports = {
    updateUserTable,
}