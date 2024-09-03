let promise = new Promise(function(resovle, reject) {
    setTimeout(() => resovle(1), 1000);
});

promise.then(function(result) {
    console.log(result);
    return result * 2;
});

promise.then(function(result) {
    console.log(result);
    return result * 2;
});

promise.then(function(result) {
    console.log(result);
    return result * 2;
});