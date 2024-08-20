let user = {
    name: "james",
    age: 30
};

user.sayHi = function() {
    console.log("hello");
}

user.sayHi();

let person = {
    name: "hello",
    age: 30,

    hello() {
        console.log(this.name);
        console.log(this.age);
        console.log("hello world");
    }
}

person.hello();

let admin = {name: "admin"};
function hello() {
    // console.log(this.name + " hello");
    console.log(this.age + " hello");
}
admin.hello = hello;
admin.hello();


let indivisual = {
    firstName: "hahaha",
    sayHi() {
        let arrow = () => console.log(this.firstName);
        arrow();
    }
};

indivisual.sayHi();

function makeUser() {
    return {
        name: "tester",
        ref(){ 
            return this;
        }
    };
};

let tester = makeUser();
console.log(tester.ref().name);
console.log(tester.name);

function makeUser2() {
    return this
}
// console.log(makeUser2());