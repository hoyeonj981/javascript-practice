let animal = {
    eats: true
};
let rabbit = Object.create(animal);

console.log(rabbit.eats);
console.log(Object.getPrototypeOf(rabbit) === animal);
console.log(Object.setPrototypeOf(rabbit, {}));

let obj = {};
let key = "key";

obj[key] = "hello world";

console.log(obj[key])