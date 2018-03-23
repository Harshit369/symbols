class MyReplacer {
  constructor(value) {
    // 'bar' in this case
    this.value = value;
  }

  [Symbol.replace](string, replacer) {
    // string = 'foobar' & replacer = 'zee' in this case
    const foundIndex = string.indexOf(this.value);

    if (typeof replacer === 'function') {
      replacer = replacer.call(undefined, foundIndex, this.value, string)
    }

    let newString = `${string.slice(0, foundIndex)}${replacer}${string.slice(foundIndex + this.value.length)}`;

    return {
      original: string,
      new: newString
    }
  }
}

let originalReturn = 'foobar'.replace('foo', 'zee');
let customReturn = 'foobar'.replace(new MyReplacer('foo'), 'zee');
let customFuncReturn = 'foobar'.replace(new MyReplacer('foo'), () => '***');

console.log(originalReturn); // zeebar
console.log(customReturn); // {original: "foobar", new: "zeebar"}
console.log(customFuncReturn); // {original: "foobar", new: "***bar"}