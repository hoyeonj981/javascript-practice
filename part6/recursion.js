function sumAll(...args) {
    let sum = 0;

    for (let arg of args) {
        sum += arg;
    }

    return sum;
}

console.log(sumAll(1,2,3));
console.log(sumAll(1,2,3,4));
console.log(sumAll(1,2,3,4,5));

let arr = [3,5,1];
console.log(Math.max(...arr));

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
console.log(Math.max(...arr1, ...arr2));

let merged = [0, ...arr1, ...arr2];
console.log(merged);

let copyArr1 = [...arr1];

console.log(copyArr1 === arr1);

let obj = {a: 1, b: 2};
let copyObj = {...obj};

console.log(obj === copyObj);