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