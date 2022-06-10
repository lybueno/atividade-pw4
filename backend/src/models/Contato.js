const Sequelize = require('sequelize');
const database = require('../database/db.js');

const Contato = database.define('contato', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
    },
    fone: {
        type: Sequelize.STRING,
        allowNull: false
    }
});


module.exports = Contato;