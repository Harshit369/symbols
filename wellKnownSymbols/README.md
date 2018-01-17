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
