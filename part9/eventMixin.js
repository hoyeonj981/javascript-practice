let eventMixin = {

    on(eventName, handler) {
        if (!this._eventHandlers) this._eventHandlers = {};
        if (!this._eventHandlers[eventName]) {
            this._eventHandlers[eventName] = [];
        }
        this._eventHandlers[eventName].push(handler);
    },

    off(eventName, handler) {
        let handlers = this._eventHandlers?.[eventName];
        if (!handlers) return;
        for (let i = 0; i < handlers.length; i++) {
            if (handlers[i] === handler) {
                handlers.splice(i--, 1);
            }
        }
    },

    trigger(eventName, ...args) {
        if (!this._eventHandlers?.[eventName]) {
            return;
        }

        this._eventHandlers[eventName].forEach(handler => handler.apply(this, args));
    }
};

// 클래스 생성
class Menu {
    choose(value) {
      this.trigger("select", value);
    }
}
  // 이벤트 관련 메서드가 구현된 믹스인 추가
Object.assign(Menu.prototype, eventMixin);
  
let menu = new Menu();
  
  // 메뉴 항목을 선택할 때 호출될 핸들러 추가
menu.on("select", value => console.log(`선택된 값: ${value}`));
  
  // 이벤트가 트리거 되면 핸들러가 실행되어 얼럿창이 뜸
  // 얼럿창 메시지: Value selected: 123
menu.choose("123");