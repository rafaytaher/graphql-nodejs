var DataTypes = require("sequelize").DataTypes;
var _department = require("./department");
var _designation = require("./designation");
var _employee = require("./employee");

function initModels(sequelize) {
  var department = _department(sequelize, DataTypes);
  var designation = _designation(sequelize, DataTypes);
  var employee = _employee(sequelize, DataTypes);

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
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
