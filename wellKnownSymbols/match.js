class MyMatcher {
  constructor(value) {
    this.value = value;
  }

  [Symbol.match](string) {
    let foundIndex = string.indexOf(this.value);
    if(foundIndex === -1) {
      return null;
    }
    return {
      value: this.value,
      index: foundIndex
    }
  }
}

let originalReturn = 'foobar'.match('foo');
let customReturn = 'foobar'.match(new MyMatcher('bar'));

console.log(originalReturn); // ["foo", index: 0, input: "foobar"]
console.log(customReturn); // {value: "bar", index: 3} you can create custom results and use custom logic to match.