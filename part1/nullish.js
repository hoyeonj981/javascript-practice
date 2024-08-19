let firstName = null;
let lastName = null;
let nickName = "nickName";

console.log(firstName ?? lastName ?? nickName ?? "anonymous");

console.log(firstName ?? lastName ?? "anonymous");

let height = 0;

console.log(height || 100);
console.log(height ?? 100);