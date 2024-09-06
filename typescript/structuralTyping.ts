class Point2 {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

class Point3 {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    sayHi() {
        console.log("hello");
    }
}


function fn10() {

    function printPoint(point: {x: number, y: number}) {
        console.log("called");
    }

    const p = new Point2(10, 10);
    printPoint(p);

    const p2 = new Point3(10, 10);
    printPoint(p2);
}

fn10();