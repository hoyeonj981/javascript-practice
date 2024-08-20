'user strict'

let user = new Object();

const userLiteral = {
    name: "john",
    age: 30
};

console.log(user);
console.log(userLiteral);

userLiteral.name = 'hello';

console.log(userLiteral);

delete userLiteral.name;

console.log(userLiteral);

let user2 = {
    name: 'hello',
    age: 30,
    'likes birds': true,
    likes_birds: true
};

console.log(user2);
console.log(user2["likes birds"])
console.log(user2.likes_birds)

let key = "likes birds";
console.log(user2[key]);

let bag = {
    [key]: 5,
};
console.log(bag[key]);

let bag2 = {
    [key + 'hello']: 5,
};
console.log(bag2[key + 'hello']);

function makeUser(name, age) {
    return {
        name,
        age,
    };
}

let user3 = makeUser('hello', 30);
console.log(user3);

console.log('age' in user3);
let name = 'name';
console.log(name in user3);

for (let key in user3) {
    console.log(key);
    console.log(user3[key]);
}