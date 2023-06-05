module.exports = (sequelize, Sequelize) => {
    const Favorite = sequelize.define('Favorite', {
      id: {
        primaryKey: true,
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV4
      },
      user: {
        type: Sequelize.DataTypes.UUID
      },
      favorite: {
        type: Sequelize.DataTypes.UUID
      }
      
    });
}  