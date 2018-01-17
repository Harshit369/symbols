class MyCollection extends Object {
  constructor() {
    super();
    this.imDifferent = true;
  }

  static [Symbol.hasInstance](obj) {
    return obj.imDifferent;
  }
}

var collection = new MyCollection();
var simple = new Object();

console.log(collection instanceof MyCollection); // true
console.log(simple instanceof MyCollection); // false
