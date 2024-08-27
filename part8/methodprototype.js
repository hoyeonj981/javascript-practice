let animal = {
    eats: true
};

function Rabbit(name) {
    this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("white");

console.log(rabbit.eats);

function Rabbit2() {}

console.log(Rabbit2.prototype.constructor == Rabbit2);
let rabbit2 = new Rabbit2();

console.log(rabbit2.constructor == Rabbit2);
