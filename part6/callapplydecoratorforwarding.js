function slow(x) {
    // very slow operation
    console.log(`slow(${x})`);
    return x;
}

function cachingDecorator(func) {
    let cache = new Map();

    return function(x) {
        if (cache.has(x)) {
            return cache.get(x);
        }

        let result = func(x);

        cache.set(x, result);
        return result;
    };
}

slow = cachingDecorator(slow);

console.log(slow(1));
console.log(slow(1));

console.log();

console.log(slow(2));
console.log(slow(2));

let worker = {
    someMethod() {
        return 1;
    },

    slow(x) {
        console.log(`slow(${x})`);
        return x * this.someMethod();
    }
};

worker.slow(1);

// worker.slow = cachingDecorator(worker.slow);
// worker.slow(2);
// let user = {
//     name: 'hello',

//     sayHi() {
//         console.log(this.name);
//     }
// }

// user.sayHi();
// user.sayHi.call(user, "world");


let user1 = {
    name: "hello",
};

let user2 = {
    name: "hi",
}

function sayHi(phrase) {
    console.log(this.name + " : " + phrase);
}

sayHi.call(user1, "world");
sayHi.call(user2, "aaa");

function cachingDecorator2(func) {
    let cache = new Map();

    return function(x) {
        if (cache.has(x)) {
            return cache.get(x);
        }

        let result = func.call(this, x);
        cache.set(x, result);
        return result;
    };
}

worker.slow = cachingDecorator2(worker.slow);

console.log(worker.slow(2));
console.log(worker.slow(2));