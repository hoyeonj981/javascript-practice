function test(arg1, arg2) {
    if (arg1) {
        console.log("arg1 is true");
    } else if (!arg1 && arg2) {
        console.log("arg2 is " + arg2);
    } else {
        console.log("empty");
    }
}

function test(arg1) {
    console.log("i'm test2 ");
}

test(true);
test(false, "hello");
test();