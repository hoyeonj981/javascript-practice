`use strict`

let user = {
    name: "tester",
    surname: "hello",

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    },

    get fullName() {
        return `${this.name} ${this.surname}`
    },
    sleep() {
        this.isSleeping = true;
    }
};

let admin = {
    __proto__: user,
    isAdmin: true
};

console.log(admin.fullName);

admin.fullName = "admin Admin";

console.log(admin.fullName);
console.log(user.fullName);

// user.sleep();
admin.sleep();

console.log(user.isSleeping);
console.log(admin.isSleeping);