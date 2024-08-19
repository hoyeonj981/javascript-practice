let message = 'hello world2';

showMessage();

function showMessage() {
    console.log('hello world');
    console.log(message);
}

function showMessage2(from, text = "no given text") {
    console.log(from + " : " + text);
}

function showMessage3(from, text = noGivenText()) {
    console.log(from + " : " + text);
}

function noGivenText() {
    return 'no given text';
}

showMessage2('hello');
showMessage2('hello', 'world');

showMessage3('hello');
showMessage3('hello', 'world');