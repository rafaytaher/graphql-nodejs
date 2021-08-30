const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('department', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'department',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "department_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
