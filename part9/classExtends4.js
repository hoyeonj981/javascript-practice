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
        super.eat();
    }
};

let longEar = {
    __proto__: rabbit,
    name: "long ear",
    eat() {
        super.eat();
    }
};

longEar.eat();
