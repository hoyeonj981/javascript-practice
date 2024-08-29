class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }

    run(speed) {
        this.speed = speed;
        console.log(`${this.name} - ${this.speed} km/h`);
    }

    stop() {
        this.speed = 0;
        console.log(`${this.name} is stopped`);
    }
}

class Rabbit extends Animal {
    constructor(name) {
        super(name);
        this.name = "rabbit : " + name;
    }

    hide() {
        console.log(`${this.name} is hidding`);
    }
}

let rabbit = new Rabbit("white");

rabbit.run(5);
rabbit.hide();

console.log(Rabbit.prototype.constructor === Animal.prototype.constructor);
console.log(Rabbit.prototype.constructor);
console.log(Animal.prototype.constructor);