let arr = ["bora", "lee"];

let [firstName, surname] = arr;

console.log(firstName);
console.log(surname);

let [first, sur] = "bora lee".split(' ');

console.log(first);
console.log(sur);

let [so, many] = [1, 2, 3, 4, 5, 6, 7];

console.log(so);
console.log(many);

let [one, , three, four] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(one);
console.log(three);
console.log(four);

let [a, b, c] = "abc";
console.log(a);
console.log(b);
console.log(c);

let [set1, set2, set3] = new Set([1,2,3]);
console.log(set1);
console.log(set2);
console.log(set3);

let user = {};
[user.name, user.surname] = "bora lee".split(' ');
console.log(user);

for (let [key, value] of Object.entries(user)) {
    console.log(`${key} : ${value}`);
}

let guest = "tester";
let admin = "new tester";

[guest, admin] = [admin, guest];
console.log(`${guest} : ${admin}`);

let [name1, name2, ...rest] = ["one", "two", "three", "four", "five", "six"];
console.log(name1);
console.log(name2);
rest.forEach(elem => console.log(elem));

console.log();
console.log();

let options = {
    title: "test",
    width: 100,
    height: 200
};

let {title, width, height} = options;
console.log(title);
console.log(width);
console.log(height);

let {one1, two2, three3} = {three3: 3, one1: 1, two2: 2};
console.log(one1);
console.log(two2);
console.log(three3);

let a1, a2, a3;

({a1, a2, a3} = {a1: "a1", a2: "a2", a3: "a3"});
console.log(a1);
console.log(a2);
console.log(a3);

let options2 = {
    size: {
        width1: 100,
        height1: 200
    },
    items: ["cake", "donut"],
    extra: true
};

let {
    size: {
        width1,
        height1
    },
    items: [item1, item2],
    title1 = "title"
} = options2
console.log(title);
console.log(width1);
console.log(height1);
console.log(item1);
console.log(item2);

let opts = {
    titleName: "test title",
    itemNames: ["item1", "item2"]
};

function showOpts({
    titleName = "untitled",
    width: w = 100,
    height: h = 200,
    itemNames: [itemName1, itemName2]
}) {
    console.log(`${titleName} ${w} ${h}`)
    console.log(itemName1);
    console.log(itemName2);
}

showOpts(opts);