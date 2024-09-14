function identity<T>(arg: T): T {
    // console.log(arg.length);
    return arg;
}

function identity2<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
}

function identity3<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);
    return arg;
}

let output1 = identity<string>("tester");
let output2 = identity("teste");

let output3: <T>(arg: T) => T = identity;

interface GenericIndentityFn {
    <T>(arg: T): T;
}

let output4: GenericIndentityFn = identity;

interface GenericIndentityFn2<T> {
    (arg: T): T;
}

let output5: GenericIndentityFn2<number> = identity;