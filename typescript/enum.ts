// enum Color {Red, Green, Blue}

// enum Color {Red = 1, Green, Blue}

// enum Color {Red = 100, Green = 200, Blue = 300}

enum Color {Red = 100, Green, Blue = 300}
let c: Color = Color.Green;
let b: Color = Color.Blue;

let colorName: string = Color[101];

console.log(c);
console.log(b);
console.log(colorName);
