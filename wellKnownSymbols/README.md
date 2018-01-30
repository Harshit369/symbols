### Well known Symbols

The other use case that makes Symbols more useful or advance is the availability of some well-known symbol constants that are available in Symbol Class. They are open for use and are already implemented in some of our major classes like Array and String.

* #### Symbol.hasInstance : instanceof
`Symbol.hasInstance` is the one that drives the use of `instanceof` in **es6 classes**. using instanceof in es6 will directly call `Symbol.hasInstance` property of the right-hand class on the left-hand operator.
```javascript
  class vipArray extends Array  {
    static [Symbol.hasInstance](instance){
      return Array.isArray(instance);
    }
  }
```

* #### Symbol.iterator : `for of` loop
ES6 brings us a new pattern to iterate over collections using `for of` loop, which calls Symbol.iterator on the right-hand operator to get the next value. it calls `[Symbol.iterator].next()` each time it initializes the value. where `[Symbol.iterator]` property should be a generator function.
```javascript
  Class myCollection {
    *[Symbol.iterator]() {
      yield // next iterated value;
    }
  }
```
you can read more about generator functions [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators).

* #### Symbol.isConcatSpereadable: Array.concat
isConcatSpereadable is a symbol that has a very specific usecase. it drives the behaviour of `Array.concat()`. Its useful for classes that extend Array. the way Array.concat will decide if any of its arguments is spereadable is by calling `Symbol.isConcatSpereadable` of argument's Class;