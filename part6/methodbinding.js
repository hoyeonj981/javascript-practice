let user = {
    name: "tester",
    sayHi() {
        console.log(`hello ${this.name}`);
    }
};

// setTimeout(user.sayHi, 1000);

setTimeout(function() {
    user.sayHi();
}, 100);

setTimeout(() => user.sayHi(), 100);

let user2 = {
    name: "tester2"
};

function func() {
    console.log(this.name);
}

let funcUser = func.bind(user2);

funcUser();


let sayHi = user.sayHi.bind(user);
sayHi();