function Rabbit(name) {
    this.name = name;
    console.log(name);
}

let rabbit = new Rabbit("white");
let rabbit2 = new rabbit.constructor("black");

console.log(rabbit.name);
console.log(rabbit2.name);