import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class designation extends Model {
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
    tableName: 'designation',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "designation_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return designation;
  }
}
