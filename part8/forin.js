let animal = {
    eats: true
};

let rabbit = {
    jumps: true,
    __proto__: animal
};

console.log(Object.keys(rabbit));

for (let prop in rabbit) {
    console.log(prop);
}

for (let prop in rabbit) {
    let isOwn = rabbit.hasOwnProperty(prop);

    if (isOwn) {
        console.log(`rabiit's prop ${prop}`);
    } else {
        console.log(`super's prop ${prop}`);
    }
}

let hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach.push(food);
    }
  };
  
  let speedy = {
     __proto__: hamster,
    stomach: []
  };
  
  let lazy = {
    __proto__: hamster,
    stomach: []
  };
  
  speedy.eat("apple");
  speedy.eat("apple");
  speedy.eat("apple");
  speedy.eat("apple");

  console.log(speedy.stomach);
  console.log(lazy.stomach);