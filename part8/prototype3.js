function Rabbit() {}

// Rabbit.prototype = {
//     jumps: true
// };

// let rabbit = new Rabbit();
// console.log(rabbit.constructor === Rabbit); // false

/*
*   왜 false인가? 모든 함수는 기본으로 default prototype이 설정된다.
*   여기서 construcotr를 가져올 수 있는데, 만약 prototype이 다른 객체로 바뀔 경우,
*   기존에 알고 있던 default prototype을 가져올 수 없다.
*/


Rabbit.prototype.jumps = true // 덮어쓰지 말고 원하는 프로퍼티 값 추가

let rabbit = new Rabbit();
console.log(rabbit.constructor == Rabbit);