function sayHi() {

}

console.log(sayHi.name);

let user = {
    sayHi() {

    },

    sayBye: function() {

    }
}

console.log(user.sayHi.name);
console.log(user.sayBye.name);

let arr1 = [function() {}];
console.log(arr1[0].name);

let arr2 = [function method() {}];
console.log(arr2[0].name);

function f1() {}
function f2(a) {}
function f3(a, b) {}

console.log(f1.length);
console.log(f2.length);
console.log(f3.length);

function ask(question, ...handlers) {
    let isYes = confirm(question);

    for (let handler of handlers) {
        if (handler.length == 0) {
            if (isYes) handler();
        } else {
            handler(isYes);
        }
    }
}

ask("question?", () => console.log("ok"), result => console.log(result));
