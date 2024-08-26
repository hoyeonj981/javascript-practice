`use strict`

const { count } = require("console");

function sayHi() {

}

console.log(sayHi.name);

let user = {
    sayHi() {

    },

    sayBye: function() {

    }
}

console.log(user.sayHi.name);
console.log(user.sayBye.name);

let arr1 = [function() {}];
console.log(arr1[0].name);

let arr2 = [function method() {}];
console.log(arr2[0].name);

function f1() {}
function f2(a) {}
function f3(a, b) {}

console.log(f1.length);
console.log(f2.length);
console.log(f3.length);

// function ask(question, ...handlers) {
//     let isYes = confirm(question);

//     for (let handler of handlers) {
//         if (handler.length == 0) {
//             if (isYes) handler();
//         } else {
//             handler(isYes);
//         }
//     }
// }

// ask("question?", () => console.log("ok"), result => console.log(result));

function sayHi() {
    console.log("hi");

    sayHi.counter++;
}

sayHi.counter = 0;

sayHi();
sayHi();
sayHi();

console.log(`${sayHi.counter}`);

let hello = function func(who) {
    if (who) {
        console.log(`hello, ${who}`);
    } else {
        func("guest");
    }
};

hello();
// func();

let hello2 = function func(who) {
    if (who) {
        console.log(`hello, ${who}`);
    } else {
        func("guest");
    }
};

let welcome = hello2;
hello2 = null;

welcome();

function makeCounter() {
    function counter() {
        return counter.count++;
    }

    counter.count = 0;

    return counter;
}

let counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());

function makeCounter2() {

    let count = 0;

    function counter() {
        return count++;
    }

    counter.set = value => count = value;

    counter.decrease = () => count--;

    return counter;
}

let myCounter = makeCounter2();

myCounter.set(10);
myCounter();
myCounter();
myCounter();
