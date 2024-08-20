let user = {};
user = null;
// console.log(user.address.street);
console.log(user?.address?.street);

let person = null;
let x = 0;
person?.sayHi(x++);
console.log(x);

let user1 = {
    admin() {
        console.log("admin");
    }
};
let user2 = {};
user1.admin?.();
user2.admin?.();
user2.admin();

let user3 = {
    name: "john"
};

let user4 = {};

let key = "name";

console.log(user3?.[key]);
console.log(user4?.[key]);
console.log(user4[key]);