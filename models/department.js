import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class department extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
  return department;
  }
}
