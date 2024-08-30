'use strict'

class CoffeMachine {
    #waterAmount = 0;
    #waterLimit = 200;

    constructor(power) {
        this._power = power;
    }

    set waterAmount(value) {
        if (value < 0 ) throw new Error("not under zero");
        this._waterAmount = value;
    }

    get waterAmount() {
        return this._waterAmount;
    }

    get power() {
        return this._power;
    }

    #checkWater(value) {
        if (value < 0) throw new Error("물의 양은 음수가 될 수 없습니다.");
        if (value > this.#waterLimit) throw new Error("물이 용량을 초과합니다.");
    }
}

let coffeMachine = new CoffeMachine(100);
coffeMachine.waterAmount = 1000;
coffeMachine.waterAmount = 0;
// coffeMachine.waterAmount(0);

console.log(coffeMachine.waterAmount);

// coffeMachine.power = 1000;
// coffeMachine.#checkWater();
// coffeMachine.#waterLimit = 100000;