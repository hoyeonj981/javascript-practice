function ex8() {
    const helloWorld = "hello world";

    console.log(typeof helloWorld);
}

ex8();

type Easing = "in" | "out" | "in-out";

class UIElement {

    animate(dx: number, dy: number, easing: "in");
    animate(dx: number, dy: number, easing: "out");
    animate(dx: number, dy: number, easing: "in-out");

    animate(dx: number, dy: number, easing: Easing) {

        if (easing == "in") {
            console.log("1");
        } else if (easing == "out") {
            console.log("2");
        } else if (easing == "in-out") {
            console.log("3");
        } else {
            console.log("else");
        }
    }

    unitiontype(padding: string | number) {

    }
}


function ex9() {
    let button = new UIElement();
    button.animate(0, 0, "in");
    button.animate(0, 0, "out");
    button.animate(0, 0, "in-out");
    // button.animate(0, 0, "no");

    button.unitiontype("hello");
    button.unitiontype(100);
    
    // button.unitiontype(true);
}

ex9();