class Spreadable extends Array {
  get [Symbol.isConcatSpereadable]() {
    return true;
  }
}

class NonSpreadable extends Array {
  get [Symbol.isConcatSpereadable]() {
    return false;
  }
}

let Sp = new Spreadable();
Sp[0] = 1;
Sp[1] = 2;

let NSp = new NonSpreadable();
NSp[0] = 8;
NSp[1] = 9;

console.log([11,12].concat(Sp).concat(NSp));
