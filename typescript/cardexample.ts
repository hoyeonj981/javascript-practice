function ex5() {

    interface Card {
        suit: string;
        card: number;
    }

    interface Deck {
        suits: string[];
        cards: number[];

        createCardPicker(this: Deck): () => Card;
    }

    let deck: Deck = {
        suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: Array(52),

        createCardPicker: function(this: Deck) {
            return () => {

                let pickedCard = Math.floor(Math.random() * 52);
                let pickedSuit = Math.floor(pickedCard / 13);

                return {suit: this.suits[pickedSuit], card: pickedCard % 13};
            }
        }
    }

    let cardPicker = deck.createCardPicker();
    let pickedCard = cardPicker();

    console.log("card : " + pickedCard.card + " of " + pickedCard.suit);
}
/*
*   자바스크립트에서는 함수를 여기저기로 넘길 수 있다.
*   그러다보면 함수 내부에서 사용하는 this를 통해서 특정 프로퍼티를 가르킬 수 있는데
*   이걸 특정 타입으로 지정할 경우 this.(properties)가 undefined되는 것을 방지할 수 있다.
*   typescript에서는 this parameter를 통해서 이걸 지정할 수 있게 하는 듯.
*/

ex5();
