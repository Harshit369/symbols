// creating a new symbol is easy
Symbol(); // creates a new object of type symbol => [object Symbol] { ... }
console.log(typeof Symbol()); // "symbol"
console.log(typeof Symbol() === 'symbol'); // true

// Defining or debugging using symbols
// Symbols can be given definitions
console.log(Symbol('me')) // [object Symbol] { ... }
console.log(Symbols('zlatan').toString()) // "Symbol(zlatan)"

// Two symbols with same definitions can never be equal
// (there are methods to do such things, bear with me here)
console.log(Symbol('zlatan') === Symbol('zlatan')) // false

// Creating two similar symbols using Symbol.for();
const mine = Symbol.for('pikachu');
const yours = Symbol.for('pikachu');

console.log(mine === yours) // true
