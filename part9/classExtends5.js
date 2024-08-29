let animal = {
    sayHi() {
        console.log("hello animal");
    }
};

let rabbit = {
    __proto__: animal,
    sayHi() {
        super.sayHi();
    }
};

let plant = {
    sayHi() {
        console.log("hello plant");
    }
};

let tree = {
    __proto__: plant,
    sayHi: rabbit.sayHi
};

tree.sayHi();