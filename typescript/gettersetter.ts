const fullNameMaxLength = 10;

class Employee {
    private _fullName: string;

    constructor(name: string) {
        this._fullName = name;
    }

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (newName && newName.length > fullNameMaxLength) {
            throw new Error("max length is " + fullNameMaxLength);
        }

        this._fullName = newName;
    }
}

function ex10() {
    let employee = new Employee("tester");
    employee.fullName = "tester1312312312312312";
}

ex10();