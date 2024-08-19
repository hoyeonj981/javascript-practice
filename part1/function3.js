'use strict'

let age = 16;
let welcome;

if (age < 18) {
    welcome = function welcome() {
        console.log('age is under 18');
    };
} else {

    welcome = function welcome() {
        console.log('age is up to 18');
    };
}

welcome();