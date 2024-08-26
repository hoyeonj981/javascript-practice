function makeCouter() {
    let count = 0;

    function counter() {
        return count++;
    }

    counter.set = value => count = value;

    counter.decrease = () => count--;

    count.toString = function() {
        return count;
    }

    return counter;
}

let counter = makeCouter();

console.log(counter());
console.log(counter());
console.log(counter());

let counter2 = makeCouter();

counter2.set(10);

console.log(counter2());
console.log(counter2());
console.log(counter2());


let counter3 = makeCouter();

counter3.set(100);

console.log(counter3.decrease());
console.log(counter3.decrease());
console.log(counter3.decrease());
console.log(counter3.decrease());

function sum(a) {

    let currentSum = a;
  
    function f(b) {
      currentSum += b;
      return f;
    }
  
    f.toString = function() {
      return currentSum;
    };
  
    return f;
  }

let result = sum(1)(2)(3);

console.log(result);