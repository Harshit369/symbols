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

* #### Symbol.match: String.match()
`Symbol.match` is another symbol that is specific to match function in Strings to find matches of sub-strings in a string. it can be used to write even your custom matcher class and match will always call `[Symbol.match](HaysackString)` property of your class.
```javascript
class MyMatcher {
  constructor(value) {
    // set value to use it further.
    this.value = value;
  }

  [Symbol.match](string) {
    //use custom logic to match on string
    return {}; // return in your desired format
  }
}
```

* #### Symbol.search: String.search()
Just like `Symbol.match`. `Symbol.search` drives the behaviour of search meathod in string class. Allowing for custom classes instead of regular expression.
```javascript
class MyMatcher {
  constructor(value) {
    // set value to use it further.
    this.value = value;
  }

  [Symbol.search](string) {
    //use custom logic to search on string
    return {}; // return in your desired format
  }
}
```

* #### Symbol.replace: String.replace()
Another Symbol specific to String class is `Symbol.replace` that allows you to use custom classes. This also opens the scope for the replacer to be another mutating function.
```javascript
class MyReplacer {
  constructor(value) {
    // set value to use it further.
    this.value = value;
  }

  [Symbol.replace](string, replacer) {
    //use custom logic to search and replace
    return {}; // return in your desired format
  }
}
```

* #### Symbol.split: String.split()
The last Symbol for string `Symbol.split` works similar to some described string related Symbols and allows custom split logic using `[Symbol.split](string)` method.

* #### Symbol.toPrimitive
`Symbol.toPrimitive` is the closest thing to operator overloading we have. toPrimitive is called when JS engine needs to convert your Object into some primitive value.
```
+Object calls Object[Symbol.toPrimitive]('number')
"" + Object calls Object[Symbol.toPrimitive]('string')
if(Object) calls Object[Symbol.toPrimitive]('default')
.
and So.
```