let id1 = Symbol("test");
let id2 = Symbol("test");

console.log(id1);
console.log(id2);

console.log(id1 == id2);
console.log(id1 === id2);

const uniqueKey = Symbol("testKey");

let obj = {
    [uniqueKey]: 'value',
    name: 'tester'
};

console.log(obj[uniqueKey]);
console.log(obj.uniqueKey);

// console.log(obj[name]);

let id = Symbol("id-value");

let someObj = {
    id: "hello",
    [id]: "symbol hello"
};

console.log(someObj.id);
console.log(someObj[id]);

let oldId = Symbol.for("id");
let newId = Symbol.for("id");

console.log(oldId == newId);
console.log(oldId === newId);

console.log(Symbol.keyFor(oldId));