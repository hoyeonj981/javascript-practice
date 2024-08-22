let user = {
    name: "tester",
    money: 1000,

    [Symbol.toPrimitive](hint) {
        console.log(`hint: ${hint}`);
        return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
}

console.log(user);
console.log(user + " hello");
console.log(+user);
console.log(user + 500);