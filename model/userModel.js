import { DataTypes } from 'sequelize';
import sequelize from '../connectDB/db.js';

const userModel = sequelize.define('User', {
  users_uid: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  app_id: {
    type: DataTypes.STRING,
  },
  version_id: {
    type: DataTypes.STRING,
  },
  created_At: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'users',
  timestamps: false
});

export default userModel;
