const {
    prompt
} = require('inquirer');
const db = require('./db')
require('console.table');


const start = async () => {
    const {
        question
    } = await prompt({
        name: 'question',
        type: 'list',
        message: 'What would you like to do?',
        choices: ['View all employees', 'View all roles', 'View all departments', 'Add employee', 'Add role', 'Add department', 'Update employee role', 'Exit'],
    })
    switch (question) {
        case 'View all employees':
            viewAllEmp();
            break;
        case 'View all roles':
            viewAllroles();
            break;
        case 'View all departments':
            viewAllDept();
            break;
        case 'Add employee':
            addEmp();
            break;
        case 'Add role':
            addrole();
            break;
        case 'Add department':
            addDept();
            break;
        case 'Update employee role':
            updateEmp();
            break;
        default:
            return quit();
    };
};

const viewAllEmp = async () => {
    try {
        const employees = await db.viewAllEmp();
        console.log('\n');
        console.table(employees);
        start();
    } catch (err) {
        console.log(err)
    }
};

const viewAllroles = async () => {
    try {
        const role = await db.viewAllroles();
        console.log('\n');
        console.table(role);
        start();
    } catch (err) {
        console.log(err)
    }
};

const viewAllDept = async () => {
    try {
        const departments = await db.viewAllDept();
        console.log('\n');
        console.table(departments);
        start();
    } catch (err) {
        console.log(err)
    }
};

const addEmp = async () => {
    const role = await db.viewAllroles();
    const employees = await db.viewAllEmp();

    const employee = await prompt([{
            name: 'first_name',
            message: "What is the new employee's first name?",
        },
        {
            name: 'last_name',
            message: "What is the new employee's last name?",
        },
    ]);

    const roleChoices = role.map(({
        id,
        title
    }) => ({
        name: title,
        value: id,
    }));

    const {
        roleId
    } = await prompt({
        type: "list",
        name: "role_id",
        message: "What is the new employee's role?",
        choices: roleChoices,
    });

    employee.role_id = roleId

    const managerChoices = employees.map(({
        id,
        first_name,
        last_name
    }) => ({
        name: `${first_name} ${last_name}`,
        value: id,
    }));

    managerChoices.unshift({
        name: 'None',
        value: null
    })

    const {
        managerId
    } = await prompt({
        type: "list",
        name: "manager_id",
        message: "Who is the new employee's manager?",
        choices: managerChoices,
    });

    employee.manager_id = managerId;

    await db.addEmp(employee);
    console.log(`added ${employee.first_name} ${employee.last_name} as new employee`);

    start();
};

const addrole = async () => {
    const role = await prompt([{
            name: 'title',
            message: "What is the title of the new role?",
        },
        {
            name: 'salary',
            message: "What is the salary of the new role?",
        },
    ]);

    await db.addrole(role);
    console.log(`added ${role.name} as new role`);

    start();
}

const addDept = async () => {
    const department = await prompt({
        name: 'name',
        message: "What is the name of the new department?",
    });

    await db.addDept(department);
    console.log(`added ${department.name} as new department`);

    start();
}



const quit = () => {
    console.log('Ok BYE!')
    process.exit();
}

start();