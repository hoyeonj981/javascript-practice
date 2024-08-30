let sayHiMixin = {
    sayHi() {
        console.log(`hi ${this.name}`);
    },
    sayBye() {
        console.log(`bye ${this.name}`);
    }
};

class User {
    constructor(name) {
        this.name = name;
    }
}

Object.assign(User.prototype, sayHiMixin);

new User("tester").sayHi();
new User("tester").sayBye();

class NoName {}

Object.assign(NoName.prototype, sayHiMixin);

new NoName().sayHi();
new NoName().sayBye();

class Person extends User {}

new Person("person").sayHi();
new Person("person").sayBye();