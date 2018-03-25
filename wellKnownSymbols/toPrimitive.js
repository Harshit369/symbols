class CheckToPrimitiveBehaviour {
  [Symbol.toPrimitive](mood) {
    if (mood === 'string') {
      return 'Nope';
    } else if (mood === 'number') {
      return 0;
    } else {
      return 100;
    }
  }
}

let Obj = new CheckToPrimitiveBehaviour();

console.log(+Obj);
console.log('' + Obj);
console.log(!Obj);