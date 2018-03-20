class MyMatcher {
  constructor(value) {
    this.value = value;
  }

  [Symbol.search](string) {
    const foundIndex = string.indexOf(this.value);

    return {
      string: this.value,
      index: foundIndex
    }
  }
}

let originalReturn = 'foobar'.search('foo');
let customReturn = 'foobar'.search(new MyMatcher('bar'));

console.log(originalReturn); // 0
console.log(customReturn); // {string: "bar", index: 3} you can create custom results and use custom logic to search.