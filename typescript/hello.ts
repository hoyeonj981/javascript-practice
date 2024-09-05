let message: string = 'hello world!';
console.log(message);

// let counter: number = 'hello';
let counter: number = 1;
counter = 1.23;
counter = 1.23e3;
counter = -1;
counter = 1/2;

// let names: string[] = ['a', 'b', 'c', 'd', 1];
let names: string[] = ['a', 'b', 'c'];
// names = [1, 2, 3];
let names2 = ['a', 'b'];
// names2 = [1, 2, 3];

let person: {
    name: string;
    age: number;
};

person = {
    name: 'tester',
    age: 100
};

let func: (name: string) => string;

func = function(name: string) {
    return `hi ${name}`;
};

// func = function(name: string) {
//     console.log('hello');
// };

let arr = [1, 'hello', true];
for (let elem of arr) {
    console.log(elem);
}

arr.push('hello2');
arr.push(1000);
arr.push(false);
// arr.push(person);
