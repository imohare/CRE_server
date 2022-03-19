import { createModels } from 'models';
const sequelizeConfig = require('config/sequelizeConfig.json');
const db = createModels(sequelizeConfig);
db.sequelize.sync(); // tells Sequelize to sync all defined models to db