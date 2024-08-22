'use strict'

let arr = [1, 2, 3];

console.log(arr[3]);

let arr2 = [1, 'c', "abc", true, function() {console.log("hello"); }];

arr2.forEach(elem => {
    console.log(elem);
});

console.log(arr2.pop());
console.log(arr2);
console.log(arr2.push('1'));
console.log(arr2);
console.log(arr2.shift());
console.log(arr2);
console.log(arr2.unshift('1'));
console.log(arr2);

console.log();


let fruits = ["banana"];
let bag = Object.assign([], fruits);

bag.push("apple");

console.log(fruits);
console.log(bag);