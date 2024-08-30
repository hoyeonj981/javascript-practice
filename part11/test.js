function test(arg1, arg2) {
    if (arg1) {
        console.log("arg1 is true");
    } else {
        console.log("arg2 is " + arg2);
    }
}

test(true);
test(false, "hello");