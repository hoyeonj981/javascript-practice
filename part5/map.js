let obj = {
    name: "tester",
    1: "one",
    isTrue: true
};

let map = new Map(Object.entries(obj));
console.log(map);

let array = [
    ["name", "tester", "hello"],
    [1, "one", "hello"],
    ["isTrue", true, "hello"]
];

let array2 = [
    1,2,3,3,4,5
];

// let newMap = new Map(array2);
let newMap = new Map(array);
console.log(newMap);