import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _department from  "./department.js";
import _designation from  "./designation.js";
import _employee from  "./employee.js";

export default function initModels(sequelize) {
  var department = _department.init(sequelize, DataTypes);
  var designation = _designation.init(sequelize, DataTypes);
  var employee = _employee.init(sequelize, DataTypes);

  employee.belongsTo(department, { as: "department", foreignKey: "department_id"});
  department.hasMany(employee, { as: "employees", foreignKey: "department_id"});
  employee.belongsTo(designation, { as: "designation", foreignKey: "designation_id"});
  designation.hasMany(employee, { as: "employees", foreignKey: "designation_id"});

  return {
    department,
    designation,
    employee,
  };
}
