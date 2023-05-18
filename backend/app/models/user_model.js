module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('User', {
    id: {
      primaryKey: true,
      type: Sequelize.DataTypes.UUID,
      defaultValue: Sequelize.DataTypes.UUIDV4
    },
    username: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    },
    displayName: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    },
    passwordHash: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    }
  });

  return User;
}