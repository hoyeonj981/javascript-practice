'use strict'

function hello(arg) {
    console.log(this + " " + arg);
    // console.log(this.name + " " + arg);
}

let person = {
    name: "tester",
}
person.hello = hello;

person.hello("hi");
console.log();
hello("hi");

console.log();

console.log(Object.getPrototypeOf(person));
console.log(person.__proto__);

console.log();

const myDate = new Date();
let object = myDate;

do {
  object = Object.getPrototypeOf(object);
  console.log(object);
} while (object);