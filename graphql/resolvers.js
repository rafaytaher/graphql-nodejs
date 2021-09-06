import initModels from '../models/init-models';
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';

const config = require('./../config/config.json')[env];

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

const models = initModels(sequelize);

const Query = {
    
    getEmployeeDetail: async () => {

        try {

            const employees = await models.employee.findAll();
            return employees;

        } catch (err) {

            console.log(err);
        }
    },
    getEmployeeDetailById: async (root, {id}) => {
        try {

            const data = await employee.findByPk(id);
            return data;

        } catch (error) {

            console.log(error);
        }
    }
};

const Mutation = {

    createDepartment: async(root, {name}) => {
        try {
            await department.create({name});
            return "Department created successfuly!";
        } catch (error) {
            console.log(error);
        }
    },
    deleteDepartment: async(_, {id}) => {
        try {
            await department.destroy({where: {id:id}});
            return "Department deleted successfuly!";
        } catch (error) {
            console.log(error);
        }
    },
    createDesignation: async(root, {name}) => {

        try {
            await designation.create({name});
            return "Designation created successfuly!";
        } catch (error) {
            console.log(error);
        }
    },
    deleteDesignation: async(_, {id}) => {

        try {
            await designation.destroy({where: {id:id}});
            return "Designation deleted successfuly!";

        } catch (error) {
            console.log(error);
        }
    },
    createEmployee: async (root, {name, email, designation_id, department_id}) => {
        try {
            await employee && employee.create({
                name,
                email,
                designation_id,
                department_id,
            });
            return "Employee created successfully!";
        } catch (error) {
            console.log(error);
        }
    },
    updateEmployee: async (_, {id, name, email, designation_id, department_id}) => {
        try {
            await employee && employee.update({
                name,
                email,
                designation_id,
                department_id,
            }, {where: {id:id}});
            return "Employee created successfully!";
        } catch (error) {
            console.log(error);
        }
    },
    deleteEmployee: async(_, {id}) => {
        try {
            await employee.destroy({where: {id:id}});
            return "Employee deleted successfully!";

        } catch (error) {
            console.log(error);
        }
    }
};

const Employee = {
    department: (emp) => department.findByPk(emp.department_id),
    designation: (emp) => designation.findByPk(emp.designation_id),
};

export default { Query, Mutation, Employee };