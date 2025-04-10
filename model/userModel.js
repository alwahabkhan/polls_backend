import { DataTypes } from 'sequelize';
import sequelize from '../connectDB/db';

const User = sequelize.define('User', {
  users_uid: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password_hash: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  app_id: {
    type: DataTypes.STRING,
  },
  version_id: {
    type: DataTypes.STRING,
  },
  user_account_creation_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'users',
  timestamps: false
});

export default User;
