import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('polls', 'wahab', '3211', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;
