### Symbols as Object properties

Symbols can be used as Object keys. due to their unique behavior, you can attach infinite Symbol properties to an object and it's guaranteed that it will never conflict with other object string keys or other symbol values. the only way to access symbol properties by using its reference stored.

```javascript
var moodProp = Symbol('moodswings');
myObject[moodProp] = "i'm not in mood";
console.log(myObject[moodProp]); // "i'm not in mood"
```

The other use case of symbol properties is that they don't show up on Object while using `for of`, `for in` od `Object.getOwnPropertyNames()`. the only way to access them is by using `Object.getOwnPropertySymbols()`. it will return an array of all symbol object properties attached to Object.
