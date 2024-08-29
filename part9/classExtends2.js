class Animal {
    name = 'animal'

    constructor() {
        console.log(this.name);
    }
}

class Rabbit extends Animal {
    name = 'rabbit'

    constructor() {
        super();
    }

}

let animal = new Animal();
let rabbit = new Rabbit();

console.log(animal.name);
console.log(rabbit.name);