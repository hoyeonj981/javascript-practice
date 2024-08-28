let obj = {};
console.log(obj);

let obj2 = new Object();
console.log(obj);

console.log();

console.log(obj.__proto__ === Object.prototype);
console.log(obj.toString === obj.__proto__.toString);
console.log(obj.toString === Object.prototype.toString);

console.log();

let arr = [];

console.log(arr.__proto__ === Array.prototype);