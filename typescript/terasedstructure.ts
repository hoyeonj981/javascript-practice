interface Pointlike {
    x: number;
    y: number;
  }
  interface Named {
    name: string;
  }
  
  function printPoint(point: Pointlike) {
    console.log("x = " + point.x + ", y = " + point.y);
  }
  
  function printName(x: Named) {
    console.log("Hello, " + x.name);
  }
  
  const obj = {
    x: 0,
    y: 0,
    name: "Origin",
  };
  
  printPoint(obj);
  printName(obj);

  class Empty {}

  function f(arg: Empty) {
    console.log("function is called");
  }

  f({k: 10});
  let testObj = { k: 10}
  f(testObj);

  class Test extends Empty {};

  f(new Test());

  class Test2 extends Empty {
    name: string;

    constructor() {
        super();
        this.name = "tester";
    }
  }

  f(new Test2());

  class Car {
    drive() {

    }
  }

  class Golfer {
    drive() {

    }
  }

  let w: Car = new Golfer();