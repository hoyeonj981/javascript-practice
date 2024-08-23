let user = {
    name: "tester",
    age: 30,
    [Symbol.iterator] () {
        return;
    }
};

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

let map = new Map();

map.set("name", "tester")
    .set("age", 30);

console.log(map.keys());
console.log(map.values());
console.log(map.entries());

let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
};

let doublePrices = Object.fromEntries(
    Object.entries(prices)
    .map(
        ([key, value]) => [key, value *2]
    )
);

console.log(doublePrices);