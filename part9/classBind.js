class Button {
    constructor(value) {
        this._value = value;
    }

    // click() {
    //     console.log(this._value);
    // }

    click = () => {
        console.log(this._value);
    }
}

let button = new Button("test binding");
setTimeout(button.click, 1000);
