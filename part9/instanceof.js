class Rabbit {}
let rabbit = new Rabbit();

console.log(rabbit instanceof Rabbit);

function LongEar() {}
console.log(new LongEar instanceof LongEar);

console.log();

let arr = [1,2,3];
console.log(arr instanceof Array);
console.log(arr instanceof Object);

console.log(Object.getPrototypeOf(rabbit));

console.log();

console.log(1 instanceof Number);
console.log("hello" instanceof String);

console.log();

console.log(typeof(1));
console.log(typeof("hello"));