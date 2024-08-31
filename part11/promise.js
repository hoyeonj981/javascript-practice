let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("finish"), 3000);
});

console.log("first"); 
// promise.then((value) => console.log(value));

console.log("last");