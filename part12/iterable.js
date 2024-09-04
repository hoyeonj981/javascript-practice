let range = {
    from: 1,
    to: 100,

    [Symbol.iterator]() {
        return {
            current: this.from,
            last: this.to,

            next() {
                if (this.current <= this.last) {
                    return {done: false, value: this.current++};
                } else {
                    return {done: true};
                }
            }
        };
    }
};

console.log([...range]);

let range2 = {
    from: 1,
    to: 5,

    *[Symbol.iterator]() {
        for(let value = this.from; value <= this.to; value++) {
            yield value;
        }
    }
};

console.log([...range2]);

function* gen() {
    let result = yield "2 + 2 = ?";

    console.log(result);
}

let generator3 = gen();
let question = generator3.next().value;

generator3.next(4);