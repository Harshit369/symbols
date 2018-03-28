class CheckToPrimitiveBehaviour {
  [Symbol.toPrimitive](mood) {
    if (mood === 'string') {
      return 'Nope';
    } else if (mood === 'number') {
      return 0;
    } else {
      return 'default';
    }
  }
}

let Obj = new CheckToPrimitiveBehaviour();

console.log(+Obj); // 0
String(Obj) // Nope
console.log(!Obj); // default