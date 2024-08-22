let range = {
    from: 1,
    to: 5
};

range[Symbol.iterator] = function() {
    return {
        current: this.from,
        last: this.to,

        next() {
            if (this.current <= this.last)
                return {done: false, value: this.current++};
            else
                return {done: true};
        }
    };
};

for (let num of range) {
    console.log(num);
}

let array = [1,2,3,4];

for (let elem of array) {
    console.log(elem);
}

for (let char of "test") {
    console.log(char);
}

let arrayLike = {
    0: "name",
    1: "hello",
    length: 2
};

let newArr = Array.from(arrayLike, elem => elem + '!');
console.log(newArr);