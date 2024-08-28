class User {
    constructor(name) {
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length < 4) {
            console.log("too short");
            return;
        }
        this._name = value;
    }
}

let user = new User("tester");
console.log(user);
user = new User("");