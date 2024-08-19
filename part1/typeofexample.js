let value = true;

console.log(typeof value);

value = String(value);

console.log(typeof value);

let number = "6" / "2";

console.log(typeof number);

let number2 = "123";

number2 = Number(number2);

console.log(typeof number2);

let str1 = "hello world";

str1 = Number(str1);
console.log(typeof str1);
console.log(str1);

console.log(Number(" 123123211243274327498327498372947234234 "));
console.log(Number("123123211243274327498327498372947234234n"));
console.log(Number("true"));
console.log(Number(true));

console.log(Boolean("hello"));
console.log(Boolean(""));
console.log(Boolean(" "));
console.log(Boolean("0"));