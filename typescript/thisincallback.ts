function ex6() {
    
    interface UIElement {
        addClickListener(onclick: (this:void, e: Event) => void): void;
    }

    interface Event {
        message: string;
    }

    class UIElementImpl implements UIElement {
        addClickListener(onclick: (this: void, e: Event) => void): void {
            console.log("add!")
        }
    }

    class Handler {
        info: string;
        // onClick(this: Handler, e: Event) {
        //     this.info = e.message;
        // }
        onClick = (e: Event) => {
            // 이렇게하면 interface에 명시된 조건도 지키면서 this가 Handler를 가르키게 된다.
            this.info = e.message;
        }
    }

    let h = new Handler();
    let uiElement = new UIElementImpl();
    uiElement.addClickListener(h.onClick);
}