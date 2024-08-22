let arr = [1, 2, 3];

delete arr[1];

console.log(arr);
console.log(arr.length);
console.log(arr[1]);

let arr2 = [1,2,3,4,5];
console.log(arr2);

// arr2.splice(1,2, "a", "b", "c");
// let arr3 = arr2.splice(1,2, "a", "b");
arr2.splice(1,2);

console.log(arr2);
// arr2.push("aaaa");
// console.log(arr3);
// console.log(arr2);

let arr4 = [1,2,3,4,5];

console.log(arr4.slice(1,2));
console.log(arr4.slice(-2));

console.log(arr4.concat([7,8], 9, 10));
console.log(arr4);

arr4.forEach((item, index, array) => {
    console.log(`${item} - ${index} - ${array}`);
});

let arr5 = [
    {id:1, name: "tester1"},
    {id:2, name: "tester2"},
    {id:3, name: "tester3"},
];

let found = arr5.find(item => item.id == 1);
let foundIdx = arr5.findIndex(item => item.id == 1);

console.log(found);
console.log(foundIdx);

let filtered = arr5.filter(item => item.id < 3);
console.log(filtered);

let lengths = ["aaa", "bbbb", "ccccc"].map(item => item.length);
console.log(lengths);

let army = {
    min: 18,
    max: 27,
    canJoin(user) {
        return user.age >= this.min && user.age < this.max;
    }
};

let users = [
    {age: 16},
    {age: 20},
    {age: 23},
    {age: 30},
];

let soldiers = users.filter(army.canJoin, army);

console.log(soldiers);