class PowerArray extends Array {
    isEmpty() {
      return this.length === 0;
    }
  
    static get [Symbol.species]() {
      return Array;
    }
}

let arr = new PowerArray(1,2,3,4,5);
console.log(arr);

let filteredArr = arr.filter(elem => elem % 2 == 0);
console.log(filteredArr);