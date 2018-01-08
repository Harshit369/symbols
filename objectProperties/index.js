// new object
const kido = {};

const normalProp = 'foo';
const symbolProp = Symbol('bar');

kido[normalProp] = 'open to all';
kido[symbolProp] = 'throws some tartrums';

// symbol propertieas won't show up on object
console.log(Object.getOwnPropertyNames(kido)); // ["foo"]

// the only way to reference symbol property is by using its reference `symbolProp`
console.log(kido[symbolProp]); // "throws some tartrums"
console.log(Object.getOwnPropertySymbols(kido)); // [[object Symbol] { ... }]

console.log(Object.getOwnPropertySymbols(kido)[0] === symbolProp) // true
