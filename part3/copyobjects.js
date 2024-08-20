let message = 'hello';
let phrase = message;

message = 'hi';
console.log(phrase);

console.log();

let user = {
    name: "hello",
};
let user2 = user;

user.name = "world";
console.log(user2.name);

console.log();

console.log(user == user2);
console.log(user === user2);

console.log();

let person = {
    name: "john",
    age: 30
};
let clonePerson = {};

for (let key in person) {
    clonePerson[key] = person[key];
}
console.log(person == clonePerson);
console.log(person === clonePerson);

let clonePerson2 = Object.assign({}, person);
console.log(clonePerson2);

let newPerson = {
    name: "john",
    sizes: {
        height: 182,
        width: 50
    }
};

let newClonePerson = Object.assign({}, newPerson);
newPerson.sizes.height = 0;
newPerson.name = "james"

console.log(newPerson);
console.log(newClonePerson);
