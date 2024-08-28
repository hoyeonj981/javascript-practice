let User = class {
    constructor() {}

    sayHi() {
        console.log("User hi");
    }
};

let User2 = function() {
    function sayHello(name) {
        console.log(`${name} hello`);
    }

    return sayHello;
};

let one = new User();
one.sayHi();

let two = User2();
two("tester");

let User3 = {
    sayHi() {
        console.log("User3 hi");
    },
    sayHello(name) {
        console.log(`${name} hello`)
    }
}

let three = User3;
three.sayHi();
User3.sayHello("tester3");