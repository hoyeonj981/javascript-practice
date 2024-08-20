function User(name) {
    this.name = name;
    this.isAdmin = false;

    this.sayHi = function() {
        console.log("hello " + this);
    }
}

let user = new User("tester");

console.log(user);
user.sayHi();