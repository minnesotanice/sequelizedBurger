module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
      burger_name: DataTypes.STRING,
      eaten: DataTypes.BOOLEAN
    });
    return Burger;
  };