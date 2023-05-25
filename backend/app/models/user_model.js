const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  const User = sequelize.define('User', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    displayName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    passwordHash: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return User;
}