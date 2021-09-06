import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class employee extends Model {
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
  return employee;
  }
}
