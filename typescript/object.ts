let employee: object;


employee = {
    firstName: 'tester',
    lastName: 'world',
    age: 10,
};

console.log(employee);


function createEmployee() {
    return {
        firstName: 'new tester',
        lastName: 'new world',
        age: 100,
        newElem: [],
    };
}

employee = createEmployee();
console.log(employee);
employee = {}
console.log(employee);
