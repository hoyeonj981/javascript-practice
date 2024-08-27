let animal = {
    eats: true,
    walk() {
        console.log("animal works");
    }
};

let rabbit = {
    jumps: true,
    __proto__: animal
};

let longEar = {
    earLength: 10,
    __proto__: rabbit
};


rabbit.walk = function() {
    console.log("rabbit jumps");
}

console.log(rabbit.eats);
console.log(rabbit.jumps);
rabbit.walk();
longEar.walk();