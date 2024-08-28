class User {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(this.name);
    }
}

let user = new User("tester");
user.sayHi();

console.log();

console.log(typeof User);
console.log(User === User.prototype.constructor);
console.log(User.prototype.sayHi);
console.log(Object.getOwnPropertyNames(User.prototype));

console.log();

class TestUser {
    constructor() {}
}

console.log(typeof TestUser);
// 클래스는 (class name)() 메소드를 호출하면 무조건 생성자를 호출. 만약 new가 없다면 타입 에러
// TestUser();

function TestUser2() {

}
// 함수는 그냥 함수처럼 처리가 된다. 없어도 괜찮음.
TestUser2();