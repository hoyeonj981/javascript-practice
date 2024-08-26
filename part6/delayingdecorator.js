function f(x) {
    console.log(x);
}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 15000);

f1000("test");
f1500("test");

function delay(func, ms) {
    let savedThis = this;
    return function() {
        setTimeout(() => func.apply(savedThis, arguments), ms);
    };
}