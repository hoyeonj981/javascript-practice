let animal = {
    name: "animal",
    eat() {
        console.log(`${this.name} is eating`);
    }
};

let rabbit = {
    __proto__: animal,
    name: "rabbit",
    eat() {
        this.__proto__.eat.call(this);
        // this.__proto__.eat();
    }
};

rabbit.eat();

let longEar = {
    __proto__: rabbit,
    eat() {
        this.__proto__.eat.call(this);
    }
};

longEar.eat();