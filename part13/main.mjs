import {sayHi} from './sayHi.mjs';
import {tester} from './sayHi.mjs';
import User from './user.mjs';

console.log(sayHi);
sayHi("tester");
sayHi(tester);

let user = new User("hello tester");
console.log(user);