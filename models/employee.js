const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employee', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    department_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'department',
        key: 'id'
      }
    },
    designation_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'designation',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'employee',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "employee_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
