function* generateSequence() {
    yield 10;
    yield 20;
    return 3;
}

let geneartor = generateSequence();

console.log(geneartor.next());
console.log(geneartor.next());
console.log(geneartor.next());

function* geneartorSequence2() {
    yield 1;
    yield 2;
    return 3;
}

let geneartor2 = geneartorSequence2();

for (let value of geneartor2) {
    console.log(value);
}