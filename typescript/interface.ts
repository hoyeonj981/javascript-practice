function fn() {

    function printLabel(labeledObj: {label: string}) {
        console.log(labeledObj.label);
    }

    let myObj = {size: 10, label: "size is 10"};
    printLabel(myObj);
}

fn();

interface LabeledValue {
    label: string;
}

function fn2() {

    function printLabel(labeledObj: LabeledValue) {
        console.log(labeledObj.label);
    }

    let myObj = {size: 10, label: "size is 10"};
    printLabel(myObj);
}

fn2();

interface SquareConfig {
    color?: string;
    width?: number;
}

function fn3() {

    function createSquare(config: SquareConfig): {color: string, area: number} {
        let newSquare = {color: "white", area: 100};

        if (config.color) {
            newSquare.color = config.color;
        }
        if (config.width) {
            newSquare.area = config.width * config.width;
        }

        return newSquare;
    }

    let mySquare = createSquare({color: "black"});

    console.log(mySquare);
}

fn3();

interface Point {
    readonly x: number;
    readonly y: number;
}

function fn4() {
    
    let point: Point = { x: 10, y: 100};

    // point.x = 100;
}

function fn5() {

    function createSquare(config: SquareConfig): {color: string, area: number} {
        let newSquare = {color: "white", area: 100};

        if (config.color) {
            newSquare.color = config.color;
        }
        if (config.width) {
            newSquare.area = config.width * config.width;
        }

        return newSquare;
    }

    console.log()

    let mySquare1 = createSquare({how: "how", works: 1000, color: "color"} as SquareConfig);
    let mySquare2 = createSquare({works: 1000, how: "how", color: "color"} as SquareConfig);

    console.log(mySquare1);
    console.log(mySquare2);
}

fn5();

interface SeacrhFunc {
    (source: string, subString: string): boolean;
}

function f6() {

    let myFunction: SeacrhFunc;
    myFunction = function(a: string, b: string) {
        let result = a.search(b);
        return result > -1;
    }
}

interface StringArray {
    [index: number]: string;
}

function fn7() {

    let myArray: StringArray;
    myArray = ["tester", "hello"];

    console.log();

    console.log(myArray[0]);
    console.log(myArray[3]);
}

fn7();

interface NumberDictionary {
    [key: string]: number;
    length: number;
    name: number;
}

// interface ClockInterface {
//     currentTime: Date;
//     setTime(d: Date): void;
// }

// class Clock implements ClockInterface {
        
//     currentTime: Date = new Date();
//     setTime(d: Date) {
//         this.currentTime = d;
//     }
//     constructor(h: number, m: number) {}
// }

// function fn8() {

    
// }

// interface ClockConstructor {
//     new (hour: number, minute: number);
// }

// class Clock2 implements ClockConstructor {
//     currentTime: Date;
//     constructor(h: number, m: number) { }
// }

interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
    tick(): void;
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);


interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}


function fn8() {
    let square = {} as Square;
    square.color = "red";
    square.sideLength = 10;
    console.log(square);
}
fn8();

interface Counter {
    (satrt: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = (function (start: number) {
        console.log(`${start} is callled`);
    }) as Counter;
    counter.interval = 123;
    counter.reset = function() {
        console.log("reset is called");
    };
    return counter;
}

function fn9() {
    let c = getCounter();
    c(1);
    c.reset();
    c.interval = 5.0;
}

fn9();