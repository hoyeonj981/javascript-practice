class User {
    static staticSomeMethod() {
        console.log("hello world")
    }

    static value = "value";
}

// User.staticSomeMethod = function() {
//     console.log("hello new world");
// };

User.staticSomeMethod();
User.value = "hello";

console.log(User.value);